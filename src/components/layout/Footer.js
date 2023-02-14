import './Footer.css';

function Footer() {
  return (
    <footer className='main-footer'>
      <div className='content-wrapper'>
        <strong>&copy;{new Date().getFullYear()} Get Price!</strong> Created by @haroldjc
      </div>
    </footer>
  );
}

export default Footer;
