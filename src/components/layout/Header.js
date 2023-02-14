import './Header.css';

function Header({ title }) {
  return (
    <header className="main-header">
      <div className="content-wrapper">
        <h1>{ title }</h1>
      </div>
    </header>
  );
}

export default Header;
