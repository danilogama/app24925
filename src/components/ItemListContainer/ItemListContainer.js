import './ItemListContainer.css';
import React,{useEffect ,useState} from 'react';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { useNotificationServices } from '../../services/notifications/NotificationServices'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'

const ItemListContainer = (props) =>{

    const [prods,setProds] = useState([]);    
    const [loading,setLoading] = useState(true);
    const { categoryId } = useParams()	
    const setNotification = useNotificationServices()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ?
            query(collection(firestoreDb, 'products'), where('category', '==', categoryId)) :
            collection(firestoreDb, 'products')

            getDocs(collectionRef).then(response => {
                const products = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
            })
            setProds(products)
        }).catch((err) => {
            setNotification('error',`Error buscando productos: ${err}`)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProds([])
        })

    }, [categoryId])

    return (
        <>    
            {loading ? <div className="loader"></div> :  
                prods.length ?  <><h2>{props.greeting}</h2>   
                                <ItemList products={prods}/> </>: 
                <h1>No se encontraron productos!</h1>
            }
        </>    
    )    
  }
  
  export default ItemListContainer
