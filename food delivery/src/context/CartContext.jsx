import {useState,useEffect,createContext} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children})=>{
   const [cart,setCart] = useState([])


   useEffect(()=>{
  const saved = JSON.parse(localStorage.getItem("cart"));
  if (saved){
    setCart(saved)
  }
   },[])

//    save cart
useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
},[cart])




   const addtoCart = (food)=>{
        setCart([...cart,food ])
   }
  

   return (
    <CartContext.Provider value={{cart,addtoCart}}>
        {children}
    </CartContext.Provider>
   )




}

