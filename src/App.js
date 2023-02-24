import { useState, useEffect } from 'react'
import productsService from './services/products'
import suppliesService from './services/supplies'
import categoriesService from './services/categories'
import './App.css';
// Components
import './components/layout/Header'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Notification from './components/ui/Notification';
import NewProductModal from './components/product/NewProductModal'
import ProductItem from './components/product/ProductItem';
import Button from './components/ui/Button';
import Confirm from './components/ui/Confirm';

const App = () => {
  const [products, setProducts] = useState([])
  const [supplies, setSupplies] = useState([])
  const [categories, setCategories] = useState([])
  const [displayNewProductModal, setDisplayNewProductModal] = useState(false)
  const [notification, setNotification] = useState({
    display: false,
    type: null,
    message: ''
  })
  const [confirmDialog, setConfirmDialog] = useState({
    display: false,
    message: '',
    confirmLabel: null,
    confirmClick: null,
    cancelLabel: null,
    cancelClick: null
  })

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
      <Notification
        display={notification.display}
        type={notification.type}
        message={notification.message}
      />
      <Header title='Get Price!' />
      <section className='main-content'>
        <div className='content-wrapper'>
          <div className='home'>
            <div className='home__start'>
              <p>Esta plataforma de precios calcula el costo total de un producto en base a sus ingredientes, mano de obra y otros gastos operativos y permite realizar proyecciones para obtener un precio final.</p>
              <Button label="Agregar producton" onClick={handleNewProductModal} variant='big full' />
              <Button label="Gestionar suministros" onClick={handleNewProductModal} variant='big full secondary' />
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
            products={products}
            setProducts={setProducts}
            supplies={supplies}
            categories={categories}
            productsService={productsService}
            setConfirmDialog={setConfirmDialog}
            setNotification={setNotification}
          />
        </div>
      </section>
      <Footer />
      <Confirm
        display={confirmDialog.display}
        message={confirmDialog.message}
        confirmLabel={confirmDialog.confirmLabel}
        confirmClick={confirmDialog.confirmClick}
        cancelLabel={confirmDialog.cancelLabel}
        cancelClick={confirmDialog.cancelClick}
      />
    </main>
  );
}

export default App;
