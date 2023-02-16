import { useState, useEffect } from 'react'
import productsService from './services/products'
import './App.css';
// Components
import './components/layout/Header'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import NewProductModal from './components/product/NewProductModal'

const App = () => {
  const [products, setProducts] = useState([])
  const [newProduct, setNewProduct] = useState({
    name: '',
    ingredients: []
  })
  const [displayNewProductModal, setDisplayNewProductModal] = useState(false)

  useEffect(() => {
    productsService
      .getAll()
      .then(products => {
        setProducts(products)
      })
  }, [])

  const handleNewProductModal = () => {
    const toggleStatus = !displayNewProductModal
    setDisplayNewProductModal(toggleStatus)
  }

  const addIngredientHandler = id => {
    const ingredientsList = structuredClone(newProduct.ingredients)

    if (ingredientsList.find(item => item.id === id)) {
      return
    }

    ingredientsList.push({id: id, amount: 0})

    setNewProduct({
      ...newProduct,
      ingredients: ingredientsList
    })
  }

  console.log(newProduct)

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
            addIngredientHandler={addIngredientHandler}
            newProduct={newProduct}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
