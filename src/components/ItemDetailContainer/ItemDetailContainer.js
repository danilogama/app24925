import './ItemDetailContainer.css';
import React,{useEffect ,useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import { useNotificationServices } from '../../services/notifications/NotificationServices'
import { firestoreDb } from '../../services/firebase/firebase'
import { getDoc, doc } from 'firebase/firestore'


const ItemDetailContainer = () =>{


    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const { productId } = useParams()    
    const setNotification = useNotificationServices()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(firestoreDb, 'products', productId)

        getDoc(docRef).then(response => {
            const product = { id: response.id, ...response.data()}
            setProducts(product)
        }).catch((error) => {
            setNotification('error',`Error buscando producto: ${error}`)
        }).finally(() => {
            setLoading(false)
        })
        
        return (() => {
            setProducts()
        })

    }, [productId])

    return (
        <>
            {loading ? (<div className="loader"></div>) : (<ItemDetail {...products}/>)}
        </>    
    )    
  }

  export default ItemDetailContainer