import './Item.css';
import { Link } from 'react-router-dom'

export const products = [
	{ id: 1 , title: 'Notebook Hp Stream 14"', stock: 5, category: 'notebook' , description: 'descriptiontext1', price: 'U$S 354',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_603880-MLU48233986823_112021-F.webp'},
	{ id: 2 , title: 'Notebook Lenovo IdeaPad 15"',stock: 8, category: 'notebook' , description: 'descriptiontext2', price: 'U$S 888',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_800653-MLA48265149903_112021-F.webp'},
	{ id: 3 , title: 'Notebook Toshiba Tecra 15.6"', stock: 2, category: 'notebook' ,description: 'descriptiontext3', price: 'U$S 719',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_909039-MLU46246971131_062021-F.webp'},
	{ id: 4 , title: 'MacBook Air M1 2020 13.3"',stock: 3, category: 'notebook' , description: 'descriptiontext4', price: 'U$S 1779',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_607446-MLA48808818346_012022-F.webp'},
	{ id: 5 , title: 'Samsung Galaxy A32',stock: 20, category: 'celular' , description: 'descripciontext5', price: 'U$S 379',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_623578-MLA45658935026_042021-F.webp'},
	{ id: 6 , title: 'Apple iPhone 13',stock: 7, category: 'celular' , description: 'descriptiontext6', price: 'U$S 1207',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_824100-MLA48036040034_102021-F.webp'},
	{ id: 7 , title: 'Xiaomi Redmi Note 10S',stock: 50, category: 'celular' , description: 'descriptiontext7', price: 'U$S 353',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_777635-MLA46924539963_072021-F.webp'},
	{ id: 8 , title: 'Huawei P40 Lite',stock: 99, category: 'celular' , description: 'descriptiontext8', price: 'U$S 354',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_614870-MLA48269164038_112021-F.webp'},
	{ id: 9 , title: 'Apple iPad Air',stock: 15, category: 'tablet' , description: 'descriptiontext9', price: 'U$S 1070',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_904050-MLA46962262406_082021-F.webp'},
	{ id: 10 , title: 'Tablet Samsung Galaxy Tab',stock: 11, category: 'tablet' , description: 'descriptiontext10', price: 'U$S 214',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_979060-MLA47146793109_082021-F.webp'},
	{ id: 11 , title: 'Tablet Amazon Fire 7',stock: 2, category: 'tablet' , description: 'descriptiontext11', price: 'U$S 85',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_899697-MLA45269667080_032021-F.webp'},
	{ id: 12 , title: 'Auriculares Redragon Zeus',stock: 4, category: 'accesorios' , description: 'descriptiontext12', price: 'U$S 99',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_896488-MLA45259469772_032021-F.webp'},
	{ id: 13 , title: 'Cooler Notebook Trust Cyclone',stock: 25, category: 'accesorios' , description: 'descriptiontext13', price: 'U$S 26',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_979447-MLU40459724872_012020-F.webp'},
	{ id: 14 , title: 'Funda Para Laptop Case Logic',stock: 25, category: 'accesorios' , description: 'descriptiontext14', price: 'U$S 32',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_731003-MLU47808119240_102021-F.webp'},
	{ id: 15 , title: 'Auriculares inalámbricos Sony WH-CH510',stock: 8, category: 'accesorios' , description: 'descriptiontext15', price: 'U$S 60',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_636254-MLA45261133276_032021-F.webp'},
	
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
		<div class="col-sm">
			<div className="card">   
				<div className='cardtitle'>
					<h4>{product.title}</h4>
				</div>         
				<img src={product.pictureUrl} alt={product.id}/>                       
				<p className="price">{product.price}</p>
				<Link to={`/item/${product.id}`} className="buttonItem">Ver detalle</Link> 
			</div>
		</div>
	  </>
	)
}

export default Item;