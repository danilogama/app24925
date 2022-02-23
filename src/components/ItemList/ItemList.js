import './ItemList.css';
import Item from '../Item/Item'

const ItemList = ({products}) =>{
	return (
        <>
            <div class='ItemList'> 
                <div class="row">    
                    {products.map((product)=>(
                    <Item product = {product} key={product.id}/>
                 	 ))}	 
                </div>  
            </div>
        </>
      	
    )
}

export default ItemList
