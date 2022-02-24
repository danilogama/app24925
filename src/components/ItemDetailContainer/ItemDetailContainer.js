import './ItemDetailContainer.css';
import React,{useEffect ,useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = (props) =>{


    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const { productId } = useParams()

    useEffect(() => {
        getItemDetail(productId).then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
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
            {loading ? (<div className="loader"></div>) : (<ItemDetail products={products}/>)}
        </>    
    )    
  }

  export default ItemDetailContainer