import { useState, useEffect } from 'react'
import productsService from './services/products'
import suppliesService from './services/supplies'
import './App.css';
// Components
import './components/layout/Header'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import NewProductModal from './components/product/NewProductModal'

const App = () => {
  const [products, setProducts] = useState([])
  const [supplies, setSupplies] = useState([])
  const [displayNewProductModal, setDisplayNewProductModal] = useState(false)

  useEffect(() => {
    productsService
      .getAll()
      .then(products => {
        setProducts(products)
      })

    suppliesService
      .getAll()
      .then(supplies => {
        setSupplies(supplies)
      })
  }, [])

  const handleNewProductModal = () => {
    const toggleStatus = !displayNewProductModal
    setDisplayNewProductModal(toggleStatus)
  }

  return (
    <main className='app-main'>
      <Header title='Get Price!' />
      <section className='main-content'>
        <div className='content-wrapper'>
          <div className='home'>
            <p>Esta app puede calcular el costo de un producto en base a ingredientes.</p>
            <p>Puede empezar agregando un producto nuevo.</p>
            <button onClick={handleNewProductModal}>Agregar producto</button>
          </div>
          <NewProductModal
            display={displayNewProductModal}
            displayHandler={handleNewProductModal}
            supplies={supplies}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
