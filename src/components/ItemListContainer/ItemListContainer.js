import './ItemListContainer.css';
import React,{useEffect ,useState} from 'react';
import {getProducts} from '../Item/Item'
import { getItemByCategory } from '../ItemDetail/ItemDetail';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) =>{

    // const [products,setProducts] = useState([]);
	
	// useEffect(()=> {	 
	// 	getProducts.then((res) =>{			
	// 		setProducts(res);
	// 	})
	// 	.catch((error) =>{
	// 		console.log(error)
	// 	})
			
	// }, []);

    const [prods,setProds] = useState([]);
    
    const [loading,setLoading] = useState(true);
    const { categoryId } = useParams()
	
    useEffect(() => {
        getItemByCategory(categoryId).then(item => {
            setProds(item)
        }).catch(err  => {
            console.log(err)
        })        
        .finally(()=>{
			setLoading(false)
		})

        return (() => {
            setProds([])
        })

    }, [categoryId])

    return (
        <>          
            <h2>{props.greeting}</h2>   
            <ItemList products={prods}/>
        </>    
    )    
  }
  
  export default ItemListContainer
