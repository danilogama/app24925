import './ItemDetailContainer.css';
import React,{useEffect ,useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useNotificationServices } from '../../services/notifications/NotificationServices'


const ItemDetailContainer = () =>{


    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const { productId } = useParams()
    
    const setNotification = useNotificationServices()

    useEffect(() => {
        getItemDetail(productId).then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
            setNotification('error',`Error buscando producto: ${err}`)
        })        
        .finally(()=>{
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