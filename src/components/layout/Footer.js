import './Footer.css';

function Footer() {
  return (
    <footer className='main-footer'>
      <div className='content-wrapper'>
        <strong>&copy;{new Date().getFullYear()} GetPrice!</strong> Creado por <a href='https://twitter.com/haroldjc'>@haroldjc</a>
      </div>
    </footer>
  );
}

export default Footer;
