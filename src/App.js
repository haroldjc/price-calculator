import { useState, useEffect } from 'react'
import productsService from './services/products'
import './App.css';
// Components
import './components/layout/Header'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import NewProductModal from './components/product/NewProductModal'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    productsService
      .getAll()
      .then(products => {
        setProducts(products)
      })
  }, [])

  console.log(products)

  return (
    <main className='app-main'>
      <Header title='Get Price!' />
      <section className='main-content'>
        <div className='content-wrapper'>
          <Home />
          <NewProductModal />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
