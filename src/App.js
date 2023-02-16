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
  const [newProduct, setNewProduct] = useState({
    name: '',
    ingredients: []
  })

  useEffect(() => {
    productsService
      .getAll()
      .then(products => {
        setProducts(products)
      })
  }, [])

  const addIngredientHandler = id => {
    const ingredientsList = structuredClone(newProduct.ingredients)
    // TODO: check if ingredient is already in
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
          <Home />
          <NewProductModal addIngredientHandler={addIngredientHandler} />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
