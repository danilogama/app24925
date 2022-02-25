import { createContext, useState } from "react"

const Context = createContext()


export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    /* Console para pruebas */
    //console.log(cart)
    
    const AddItem = (productToAdd, quantity) => {

        const newObj = {
            ...productToAdd,
            quantity
        }

        if(isInCart(productToAdd.id)) {
            const itemDuplicate = cart.map(p =>{
                if(p.id === newObj.id){
                    p.quantity += newObj.quantity                    
                }                
                return p;
            })
            setCart(itemDuplicate)

            } else {
            setCart([...cart, newObj])
        }
    }

    const removeItem = (id) => {
        const cartResult = cart.filter(p => p.id !== id) 
        setCart(cartResult)
    }

    const clear = () =>{
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }

    
    return (
        <Context.Provider value={{
            cart,
            AddItem,
            removeItem,
            clear
            }}>
            {children}
            
        </Context.Provider>
        
    )
}

export default Context