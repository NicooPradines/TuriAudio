import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ItemDetail() {
  const { id } = useParams()
  const [audioguia, setAudioguia] = useState(null)
  const { addToCart } = useCart()

  useEffect(() => {
    fetch('/data/audioguias.json')
      .then(r => r.json())
      .then(datos => {
        const encontrada = datos.find(a => a.id === Number(id))
        setAudioguia(encontrada)
      })
  }, [id])

  if (!audioguia) return <p>Cargando...</p>

  return (
    <div>
      <img src={audioguia.imagen} alt={audioguia.nombre} width="300" />
      <h2>{audioguia.nombre}</h2>
      <p>{audioguia.pais}</p>
      <p>${audioguia.precio}</p>
      <p>{audioguia.duracion}</p>
      <button onClick={() => addToCart(audioguia)}>Agregar al carrito</button>
    </div>
  )
}