import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { useCart } from '../context/CartContext';

const Header = () => {
  return (
    <header>
      <img className={styles.logo} src="/images/logo.png" alt="Logo de TuriAudio" />
      <nav>
        <ul className={styles.navList}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/carrito">Carrito ({useCart().carrito.length})</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;