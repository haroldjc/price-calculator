import './Header.css';

function Header({ title }) {
  return (
    <header className='main-header'>
      <div className='main-header__wrapper content-wrapper'>
        <h1 className='main-header__logo'>{ title }</h1>
        <nav className='main-nav'>
          <a className='main-nav__item' href='#settings'>Ajustes</a>
          <a className='main-nav__item' href='#account'>Cuenta</a>
          <a className='main-nav__item' href='#help'>Ayuda</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
