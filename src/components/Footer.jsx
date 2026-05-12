import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <h3>TuriAudio</h3>
      <p>Explora, escucha y disfruta de tu viaje auditivo con nosotros</p>
      
      <h3>Equipo</h3>
      <div className={styles.equipoGrid}>
        <div>
          <img src="/images/martin.png" alt="Nicolas" />
          <p>Nicolas Pradines</p>
          <p>CEO</p>
        </div>
        <div>
          <img src="/images/sofia.png" alt="Sofia" />
          <p>Sofia Garcia</p>
          <p>Desarrolladora FullStack</p>
        </div>
        <div>
          <img src="/images/lucas.png" alt="Martin" />
          <p>Martin Lopez</p>
          <p>Diseñador UX/UI</p>
        </div>
      </div>

      <p>&copy; 2026 TuriAudio. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;