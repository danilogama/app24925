import './ItemList.css';
import Item from '../Item/Item'


const ItemList = ({products}) =>{
	return (
        <div className='ItemList'>
                {products.map((product)=>(
                <Item product = {product} key={product.id}/>		
            ))}	
        </div>	
    )
}

export default ItemList
