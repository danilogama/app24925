import { products,addProduct } from "../Item/Item";
import ItemCount from '../ItemCount/ItemCount';


// export const getItemDetail =  new Promise ((resolve,reject) => {
//     setTimeout(() =>{
//         resolve(products[0]);
//     },2000);
// });

export const getItemDetail = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 500)
    })
}

export const getItemByCategory = (category) => {
    return new Promise((resolve) => {
        
        if(category!=null){
            
            const prods = products.filter(p => p.category === category)
            setTimeout(() => {
                resolve(prods)
            }, 100)
        }
        else{
            setTimeout(() => {
                resolve(products)
            }, 100);
        }
    })
}

const ItemDetail = ({products}) =>{
	return (	
                <div className="card" key={products.id}>            
                    <h2>{products.title}</h2>
                    <img src={products.pictureUrl} alt={products.id}  height="120px"/>                       
                    <p className="price">{products.price}</p>
                    <h5>{products.description}</h5>
                    <h5>{products.category}</h5>
                    <ItemCount stock={products.stock} initial={1} onAdd={addProduct}/> 
                    
                    {/* <ItemCount stock={products?.stock} initial={1} onAdd={addProduct}/>  */}
                </div>   
    )
}

export default ItemDetail;