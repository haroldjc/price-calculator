import { useState, useEffect } from 'react'
import productsService from './services/products'
import suppliesService from './services/supplies'
import categoriesService from './services/categories'
import './App.css';
// Components
import './components/layout/Header'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import NewProductModal from './components/product/NewProductModal'
import ProductItem from './components/product/ProductItem';

const App = () => {
  const [products, setProducts] = useState([])
  const [supplies, setSupplies] = useState([])
  const [categories, setCategories] = useState([])
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

    categoriesService
      .getAll()
      .then(categories => {
        setCategories(categories)
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
            <div className='home__start'>
              <p>Esta plataforma de precios calcula el costo total de un producto en base a sus ingredientes, mano de obra y otros gastos operativos y permite realizar proyecciones para obtener un precio final.</p>
              <button className='button button--big button--full' onClick={handleNewProductModal}>
                Agregar producto
              </button>
              <button className='button button--secondary button--big button--full' onClick={handleNewProductModal}>
                Gestionar suministros
              </button>
            </div>
            <div className='product-list'>
              {
                products.map(product => <ProductItem key={product.id} product={product} />)
              }
            </div>
          </div>
          <NewProductModal
            display={displayNewProductModal}
            displayHandler={handleNewProductModal}
            supplies={supplies}
            categories={categories}
            productsService={productsService}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
