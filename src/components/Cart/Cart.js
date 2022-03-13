import './Cart.css' 
import { useState, useContext, useRef} from 'react'
import CartContext from '../../context/CartContext'
import { useNotificationServices } from "../../services/notifications/NotificationServices"
import Togglable from '../Togglable/Togglable'
import ContactForm from '../ContactForm/ContactForm'
import { writeBatch, getDocs, collection, addDoc, Timestamp, where, query, documentId } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    })

    const { cart, clear, removeItem, getTotal } = useContext(CartContext)

    

    const contactFormRef = useRef()

    const setNotification = useNotificationServices()

    
    const confirmOrder = () => {
        if(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') {
           
            setProcessingOrder(true)

            const objOrder = {
                buyer: contact,
                items: cart,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(firestoreDb)
            const outOfStock = []
            
            const ids = objOrder.items.map(i => i.id)


            getDocs(query(collection(firestoreDb, 'products'),where(documentId(), 'in', ids)))
                .then(response => {
                    response.docs.forEach((docSnapshot) => {
                        if(docSnapshot.data().stock >= objOrder.items.find(prod => prod.id === docSnapshot.id).quantity) {
                            batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - objOrder.items.find(prod => prod.id === docSnapshot.id).quantity})
                        } else {
                            outOfStock.push({id: docSnapshot.id, ...docSnapshot.data()})
                        }
                    })
                }).then(() => {
                    if(outOfStock.length === 0) {
                        addDoc(collection(firestoreDb, 'orders'), objOrder).then(({id}) => { 
                            batch.commit()
                            clear()
                            setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                        })
                    } else {
                        outOfStock.forEach(prod => {
                            setNotification('error', `El producto ${prod.title} no tiene stock disponible`)
                            removeItem(prod.id)
                        })    
                    }               
                }).catch((error) => {
                    setNotification('error', error)
                }).finally(() => {
                    setProcessingOrder(false)
                })

        } else {
             setNotification('error', 'Debe completar los datos de contacto para generar la orden')
        }
    }

    if(processingOrder) {
        return (<div className="loader"></div>)
    }


    if(cart.length === 0) {
        return <div className='cartDetail'>
            <h1>No hay productos en el carrito</h1>
        </div>
    }

    return ( 
    <div>
        <h1>Productos del carrito</h1> 
        <div className='cartDetail'>
        { cart.map(p => <CartItem key={p.id} {...p}/>) }
        </div>
        <h1>Total: U$S {getTotal()}</h1>
        <button onClick={() => clear()} className="buttonItem" style={{backgroundColor: '#db4025'}} >Cancelar compra</button>
        <button onClick={() => confirmOrder()} className="buttonItem" style={{backgroundColor: '#219c0b'}} >Confirmar Compra</button>
        {
            (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') &&
            
                <div>
                    <h4>Nombre: {contact.name}</h4>
                    <h4>Telefono: {contact.phone}</h4>
                    <h4>Direccion: {contact.address}</h4>
                    <h4>Comentario: {contact.comment}</h4>
                    <button onClick={() => setContact({ phone: '', address: '', comment: ''})} 
                            className='buttonItem' 
                            style={{backgroundColor: '#db4025'}}>
                        Borrar datos de contacto
                    </button>
                </div>    
        }
        <Togglable buttonLabelShow={
                    (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') 
                        ? 'Editar contacto' 
                        : 'Agregar contacto'
                    } 
                    ref={contactFormRef}>
            <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
        </Togglable>          
    </div>
    )    

}         
export default Cart