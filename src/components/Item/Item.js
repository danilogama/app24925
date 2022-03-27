import './Item.css';
import { Link } from 'react-router-dom'

export const products = []

export const getProducts =  new Promise ((resolve,reject) => {
		setTimeout(() =>{
			resolve(products);
		},100);
	});

const Item = ({product}) =>{
	return (
		<>    
		<div className="col-sm">
			<div className="card">   
				<div className='cardtitle'>
					<h4>{product.title}</h4>
				</div>         
				<img src={product.pictureUrl} alt={product.id}/>                       
				<p className="price">U$S {product.price}</p>
				<Link to={`/item/${product.id}`} className="buttonItem">Ver detalle</Link> 
			</div>
		</div>
	  </>
	)
}

export default Item;