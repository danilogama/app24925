import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

export const products = [
	{ id: 1 , title: 'Notebook Hp Stream 14"', description: 'Esta notebook HP Stream ágil, diseñada para la conectividad permanente, le permite pasar fácilmente de las obligaciones hogareñas a sus programas favoritos. Con su diseño portátil, su batería de larga duración y su potente conectividad Wi-Fi, ofrece la productividad y las funciones esenciales que desea, sin hacerle perder tiempo jamás.', price: 'U$S 354',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_603880-MLU48233986823_112021-F.webp'},
	{ id: 2 , title: 'Notebook Lenovo IdeaPad 15"', description: 'descriptiontext2', price: 'U$S 888',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_800653-MLA48265149903_112021-F.webp'},
	{ id: 3 , title: 'Notebook Toshiba Tecra 15.6"', description: 'descriptiontext3', price: 'U$S 719',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_909039-MLU46246971131_062021-F.webp'},
	{ id: 4 , title: 'MacBook Air M1 2020 13.3"', description: 'descriptiontext4', price: 'U$S 1779',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_607446-MLA48808818346_012022-F.webp'},
]


export const getProducts =  new Promise ((resolve,reject) => {
		setTimeout(() =>{
			resolve(products);
		},2000);
	});

export const addProduct = (count) =>{
        console.log('Cantidad de productos: ' + count )
    }

const Item = ({product}) =>{
	return (
        <div className="card">            
            <h2>{product.title}</h2>
            <img src={product.pictureUrl} alt={product.id}  height="120px"/>                       
            <p className="price">{product.price}</p>
            <ItemCount stock={5} initial={1} onAdd={addProduct}/> 
        </div>        
	)
}

export default Item;