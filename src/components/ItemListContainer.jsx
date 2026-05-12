import { useState, useEffect } from "react";
import Item from "./Item";

export default function ItemListContainer() {
  const [audioguias, setAudioguias] = useState([]);

  useEffect(() => {
    fetch("/data/audioguias.json")
      .then((response) => response.json())
      .then((data) => setAudioguias(data))
      .catch((error) => console.error("Error fetching audioguias:", error));
  }, []);

  return (
    <div className="item-list-container">
      {audioguias.map((audioguia) => (
        <Item
          key={audioguia.id}
          id={audioguia.id}
          nombre={audioguia.nombre}
          pais={audioguia.pais}
          precio={audioguia.precio}
          imagen={audioguia.imagen}
        />
      ))}
    </div>
  );
}
