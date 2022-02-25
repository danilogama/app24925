import './ItemList.css';
import Item from '../Item/Item'

const ItemList = ({products}) =>{
	return (
        <>
            <div className="ItemList"> 
                <div className="row">    
                    {products.map((product)=>(
                    <Item product = {product} key={product.id}/>
                 	 ))}	 
                </div>  
            </div>
        </>
      	
    )
}

export default ItemList
