import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) =>{

    const addProduct = (count) =>{
        console.log('Cantidad de productos: ' + count )
    }
    return (
        <><h2>{props.greeting}</h2>   
        <ItemCount stock={5} initial={1} onAdd={addProduct}/> 
        </>    
    )    
  }
  
  export default ItemListContainer
