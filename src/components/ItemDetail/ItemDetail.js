import { products,addProduct } from "../Item/Item";
import ItemCount from '../ItemCount/ItemCount';


export const getItemDetail =  new Promise ((resolve,reject) => {
    setTimeout(() =>{
        resolve(products[0]);
    },2000);
});

const ItemDetail = ({products}) =>{
	return (	
                <div className="card" key={products.id}>            
                    <h2>{products.title}</h2>
                    <img src={products.pictureUrl} alt={products.id}  height="120px"/>                       
                    <p className="price">{products.price}</p>
                    <h5>{products.description}</h5>
                    <ItemCount stock={5} initial={1} onAdd={addProduct}/> 
                </div>   
    )
}

export default ItemDetail;