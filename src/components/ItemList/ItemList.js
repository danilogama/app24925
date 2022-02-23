import './ItemList.css';
import Item from '../Item/Item'

/*error 
<Filter>
  { product.color?.map((c) => (
    <FilterColor color = {c} key = {c} />
  ))};
</Filter>

*/ 
const ItemList = ({products}) =>{
	return (
        <>
            {/* <div className='ItemList'>            
                {products.map((product)=>(
                <Item product = {product} key={product.id}/>		
            ))}	
            </div> */}
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
