import React from 'react';
import { useCart } from '../context/CartContext'

export default function Carrito() {
  const { carrito } = useCart()

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div>
          {carrito.map((item, index) => (
            <div key={index}>
              <img src={item.imagen} alt={item.nombre} width="100" />
              <h3>{item.nombre}</h3>
              <p>{item.pais}</p>
              <p>${item.precio}</p>
            </div>
          ))}
          <h3>Total: ${carrito.reduce((acc, item) => acc + item.precio, 0)}</h3>
        </div>
      )}
    </div>
  )
}