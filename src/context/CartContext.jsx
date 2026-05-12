import { createContext, useState, useContext } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([])

  const addToCart = (producto) => {
    setCarrito([...carrito, producto])
  }

  return (
    <CartContext.Provider value={{ carrito, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}