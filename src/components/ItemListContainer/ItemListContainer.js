import './ItemListContainer.css';
import React,{useEffect ,useState} from 'react';
import {getProducts} from '../Item/Item'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) =>{

    const [products,setProducts] = useState([]);
	
	useEffect(()=> {	 
		getProducts.then((res) =>{			
			setProducts(res);
		})
		.catch((error) =>{
			console.log(error)
		})
			
	}, []);

    return (
        <>
            <h2>{props.greeting}</h2>   
            <ItemList products={products}/>
        </>    
    )    
  }
  
  export default ItemListContainer
