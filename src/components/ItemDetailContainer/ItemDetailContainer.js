import './ItemDetailContainer.css';
import React,{useEffect ,useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getItemDetail} from '../ItemDetail/ItemDetail'


const ItemDetailContainer = (props) =>{

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
	
	useEffect(()=> {	
		getItemDetail.then((res) =>{			
			setProducts(res);
		})
		.catch((error) =>{
			console.log(error)
		})
        .finally(()=>{
			setLoading(false)
		})
			
	}, []);

    return (
        <>
            {loading ? (<div className="loader"></div>) : (<ItemDetail products={products}/>)}
        </>    
    )    
  }

  export default ItemDetailContainer