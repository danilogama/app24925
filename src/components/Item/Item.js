import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'

export const products = [
	{ id: 1 , title: 'Notebook Hp Stream 14"', stock: 5, category: 'notebook' , description: 'Esta notebook HP Stream ágil, diseñada para la conectividad permanente, le permite pasar fácilmente de las obligaciones hogareñas a sus programas favoritos. Con su diseño portátil, su batería de larga duración y su potente conectividad Wi-Fi, ofrece la productividad y las funciones esenciales que desea, sin hacerle perder tiempo jamás.', price: 'U$S 354',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_603880-MLU48233986823_112021-F.webp'},
	{ id: 2 , title: 'Celular Hp Stream 14"', stock: 2, description: 'descriptiontext2', category: 'celular' , price: 'U$S 888',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_800653-MLA48265149903_112021-F.webp'},
	{ id: 3 , title: 'Notebook Toshiba Tecra 15.6"',  stock: 3, category: 'notebook' , description: 'descriptiontext3', price: 'U$S 719',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_909039-MLU46246971131_062021-F.webp'},
	{ id: 4 , title: 'Tablet Hp Stream 14"',  stock: 2,category: 'tablet', description: 'descriptiontext4', price: 'U$S 1779',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_607446-MLA48808818346_012022-F.webp'},
	
	/**Informacion para utilizar en el futuro*/
	{ id: 5 , title: 'Notebook Lenovo IdeaPad 15"',stock: 5, category: 'notebook' , description: 'descriptiontext2', price: 'U$S 888',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_800653-MLA48265149903_112021-F.webp'},
	{ id: 6 , title: 'Notebook Toshiba Tecra 15.6"', stock: 5, category: 'notebook' ,description: 'descriptiontext3', price: 'U$S 719',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_909039-MLU46246971131_062021-F.webp'},
	{ id: 7 , title: 'MacBook Air M1 2020 13.3"',stock: 5, category: 'notebook' , description: 'descriptiontext4', price: 'U$S 1779',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_607446-MLA48808818346_012022-F.webp'},
	
	{ id: 8 , title: 'Notebook Toshiba Tecra 15.6"',stock: 5, category: 'accesorios' , description: 'descriptiontext3', price: 'U$S 719',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_909039-MLU46246971131_062021-F.webp'},
	
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
        {/* <div className="card">            
            <h2>{product.title}</h2>
            <img src={product.pictureUrl} alt={product.id}  height="120px"/>                       
            <p className="price">{product.price}</p>
			<Link to={`/item/${product.id}`}>Ver detalle</Link> */}
            {/* <ItemCount stock={product.stock} initial={1} onAdd={addProduct}/>  */}
       { /* </div>*/ }

		
		<div class="col-sm">
			<div className="card">            
				<h2>{product.title}</h2>
				<img src={product.pictureUrl} alt={product.id}/>                       
				<p className="price">{product.price}</p>
				<Link to={`/item/${product.id}`} className="buttonItem">Ver detalle</Link> 
				{/* <ItemCount stock={product.stock} initial={1} onAdd={addProduct}/>  */}
			</div>
		</div>
	  </>
	)
}

export default Item;