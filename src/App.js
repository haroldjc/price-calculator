import { useState, useEffect } from 'react';
import suppliesService from './services/supplies';
import './App.css';
// Components
import './components/layout/Header'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';

function App() {
  const [supplies, setSupplies] = useState([]);

  useEffect(() => {
    suppliesService
      .getAll()
      .then(supplies => {
        setSupplies(supplies)
        console.log(supplies)
      })
  }, [])

  return (
    <main className='app-main'>
      <Header title='Get Price!' />
      <section className='main-content'>
      <div className='content-wrapper'>
        <Home />
      </div>
    </section>
      <Footer />
    </main>
  );
}

export default App;
