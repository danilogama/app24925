import { createContext, useState } from "react"

const Context = createContext()


export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])     
 
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

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total = total + prod.price * prod.quantity
        })
        return total
    }

    const getQuantity = () => {
        
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        })
        return count
    }
    
    return (
        <Context.Provider value={{
            cart,
            AddItem,
            removeItem,
            clear,
            getTotal,
            getQuantity
            }}>
            {children}
            
        </Context.Provider>
        
    )
}

export default Context