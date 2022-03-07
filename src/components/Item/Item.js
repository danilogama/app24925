import './Item.css';
import { Link } from 'react-router-dom'

export const products = [
	{ id: 1 , title: 'Notebook Hp Stream 14"', stock: 5, category: 'notebook' , description: 'descriptiontext1', price: '354',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_603880-MLU48233986823_112021-F.webp'}
]


export const getProducts =  new Promise ((resolve,reject) => {
		setTimeout(() =>{
			resolve(products);
		},100);
	});

export const addProduct = (count) =>{
        console.log('Cantidad de productos: ' + count )
    }

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