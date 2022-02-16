import React,{useEffect ,useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getItemDetail} from '../ItemDetail/ItemDetail'

const ItemDetailContainer = (props) =>{

    const [products,setProducts] = useState([]);
	
	useEffect(()=> {	
		getItemDetail.then((res) =>{			
			setProducts(res);
		})
		.catch((error) =>{
			console.log(error)
		})
			
	}, []);

    return (
        <>
            <ItemDetail products={products}/>
        </>    
    )    
  }

  export default ItemDetailContainer