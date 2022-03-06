import { useState, useEffect } from 'react'

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
        //tambien puede ser: count > initial && setCount(count - 1)
        if(count > initial) {
            setCount(count - 1)
        } 
    }    
    
    return(
        <>            
            <button onClick={decrement}>-</button>
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </>        
    )
}

export default ItemCount