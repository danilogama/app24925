import { useState, useEffect } from 'react'
import './ItemCount.css';

const ItemCount = ({ stock, initial,  onAdd }) => {
    const [count, setCount] = useState(0) 


    useEffect(() => {
        setCount(initial)

        return () => {
            setCount(0)          
        }
    }, [])

    const increment = () => {
        
        if(count < stock){
            setCount(count + 1)
        }else{
            console.log('No hay stock')
        }
    }

    const decrement = () => {
        if(count > initial) {
            setCount(count - 1)
        } 

    }    
    
    return(
        
        <div class="card">
            <img src="/images/ntbkLenovo.jpg" alt="ntbkLenovo"  height="200px"/>
            <h1>Notebook Gaming HP</h1>
            
            <p class="price">$19.99</p>
            <button onClick={decrement}>-</button>
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
            <p><button onClick={()=>onAdd(count)}>Agregar al carrito</button></p>
        </div>
        
    )
}

export default ItemCount