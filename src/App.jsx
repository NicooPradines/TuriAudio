import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Bienvenida from "./pages/Bienvenida";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./pages/ItemDetail";
import Carrito from "./pages/Carrito";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetail />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </Layout>
  );
}

export default App;