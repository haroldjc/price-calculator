import './NewProductModal.css';
import { useState } from 'react';
import IngredientSearch from './IngredientSearch';
import IngredientsList from './IngredientsList'
import categories from '../../services/categories';

const NewProductModal = props => {

  const [ingredientQuery, setIngredientQuery] = useState('')
  const [newProduct, setNewProduct] = useState({
    name: '',
    categoryId: 1,
    ingredients: []
  })

  const handleNameChange = event => {
    setNewProduct({
      ...newProduct,
      name: event.target.value
    })
  }

  const ingredientsList = structuredClone(newProduct.ingredients)

  const handleAddIngredient = id => {
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

  const handleCategoryChange = event => {
    setNewProduct({
      ...newProduct,
      categoryId: Number(event.target.value)
    })
  }

  console.log(newProduct)

  const saveNewProduct = () => {
    const productObject = {
      name: newProduct.name,
      ingredients: newProduct.ingredients
    }

    props.productsService
      .create(productObject)
      .then(savedProduct => {
        console.log(`${savedProduct.name} was saved successfully!`)
        setNewProduct({
          name: '',
          categoryId: 1,
          ingredients: []
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  if (!props.display) {
    return null
  }

  const discardNewProduct = () => {
    if (newProduct.name !== '' || newProduct.ingredients.length) {
      if (window.confirm(`¿Quiere descartar la creación del producto "${newProduct.name}"?`)) {  
        setNewProduct({
          name: '',
          categoryId: 1,
          ingredients: []
        })
      }
    }

    props.displayHandler()
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
                <input onChange={handleNameChange} value={newProduct.name} type='text' name='name' placeholder='Nombre' autoComplete='off' />
              </div>
              <div className='new-product__field'>
                {/* <input type='text' name='category' placeholder='Categoría'></input> */}
                <select name='categories' defaultValue={newProduct.categoryId} onChange={handleCategoryChange}>
                  {
                    props.categories.length !== 0
                      ? props.categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)
                      : <></>
                  }
                </select>
              </div>
            </div>
            <div className='new-product__ingredients'>
              <h3 className='modal__subtitle'>Ingredients</h3>
              <IngredientsList
                product={newProduct}
                supplies={props.supplies}
                handleAmountChange={handleAmountChange}
                handleDeleteIngredient={handleDeleteIngredient}
              />
              <h3 className='modal__subtitle'>Agregar ingrediente</h3>
              <IngredientSearch
                handleAddIngredient={handleAddIngredient}
                handleIngredientQueryChange={handleIngredientQueryChange}
                ingredientQuery={ingredientQuery}
                supplies={props.supplies}
              />
            </div>
          </form>
        </article>
        <footer className='modal__footer'>
          <button className='button' onClick={saveNewProduct}>Guardar</button>
          <button className='button button--secondary' onClick={discardNewProduct}>Cancelar</button>
        </footer>
      </div>
    </div>
  );
}

export default NewProductModal;
