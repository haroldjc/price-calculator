import './NewProductModal.css';
import { useState } from 'react';
import IngredientSearch from './IngredientSearch';
import IngredientsList from './IngredientsList'

const NewProductModal = ({ display, displayHandler, supplies }) => {

  const [ingredientQuery, setIngredientQuery] = useState('')
  const [newProduct, setNewProduct] = useState({
    name: '',
    ingredients: []
  })

  const ingredientsList = structuredClone(newProduct.ingredients)

  const addIngredientHandler = id => {
    if (ingredientsList.find(item => item.id === id)) {
      return
    }

    ingredientsList.push({id: id, amount: 100})

    setNewProduct({
      ...newProduct,
      ingredients: ingredientsList
    })

    setIngredientQuery('')
  }
  
  const handleAmountChange = (id, event) => {
    event.preventDefault()
    ingredientsList.find(item => item.id === id).amount = Number(event.target.value)
    
    setNewProduct({
      ...newProduct,
      ingredients: ingredientsList
    })
  }

  const handleDeleteIngredient = id => {
    setNewProduct({
      ...newProduct,
      ingredients: ingredientsList.filter(item => item.id !== id)
    })
  }
  
  const handleIngredientQueryChange = event => {
    setIngredientQuery(event.target.value)
  }

  console.log(newProduct)

  if (!display) {
    return null
  }

  return (
    <div className='modal'>
      <div className='modal__inner'>
        <header className='modal__header'>
          <h2 className='modal__title'>Nuevo producto</h2>
        </header>
        <article className='modal__content'>
          <form className='new-product'>
            <div className='new-product__fields'>
              <div className='new-product__field'>
                <input type='text' name='name' placeholder='Nombre' autoComplete='off'></input>
              </div>
              <div className='new-product__field'>
                <input type='text' name='category' placeholder='Categoría'></input>
              </div>
            </div>
            <div className='new-product__ingredients'>
              <h3 className='modal__subtitle'>Ingredients</h3>
              <IngredientsList
                product={newProduct}
                supplies={supplies}
                handleAmountChange={handleAmountChange}
                handleDeleteIngredient={handleDeleteIngredient}
              />
              <h3 className='modal__subtitle'>Agregar ingrediente</h3>
              <IngredientSearch
                addIngredientHandler={addIngredientHandler}
                handleIngredientQueryChange={handleIngredientQueryChange}
                ingredientQuery={ingredientQuery}
                supplies={supplies}
              />
            </div>
          </form>
        </article>
        <footer className='modal__footer'>
          <button className='button'>Guardar</button>
          <button className='button button--secondary' onClick={displayHandler}>Cancelar</button>
        </footer>
      </div>
    </div>
  );
}

export default NewProductModal;
