import React from 'react';
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Item({ id, nombre, pais, precio, imagen }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ id, nombre, pais, precio, imagen })
  }

  return (
    <div className="item">
      <Link to={`/producto/${id}`}>
        <img src={imagen} alt={nombre} />
        <h3>{nombre}</h3>
        <p>{pais}</p>
      </Link>
      <p>${precio}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  )
}