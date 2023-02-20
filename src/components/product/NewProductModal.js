import './NewProductModal.css';
import { useState } from 'react';
import IngredientSearch from './IngredientSearch';
import IngredientsList from './IngredientsList'
import Modal from '../ui/Modal';
import Button from '../ui/Button';

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
    ingredientsList.find(item => item.id === id).amount = parseInt(event.target.value, 10)
    
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
        props.setProducts(props.products.concat(savedProduct))
        
        setNewProduct({
          name: '',
          categoryId: 1,
          ingredients: []
        })

        props.setDisplayNotification(true)
        props.displayHandler()
        
        setTimeout(() => {
          props.setDisplayNotification(false)
        }, 5000)

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

  const modalButtons = [
    <Button label="Guardar" onClick={saveNewProduct} />,
    <Button label="Cancelar" onClick={discardNewProduct} variant='secondary' />
  ]

  return (
    <Modal title="Crear producto" buttons={modalButtons}>
      <form className='new-product'>
        <div className='new-product__fields'>
          <div className='new-product__field'>
            <input onChange={handleNameChange} value={newProduct.name} type='text' name='name' placeholder='Nombre' autoComplete='off' />
          </div>
          <div className='new-product__field'>
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
          <h3 className='modal__subtitle'>Ingredientes</h3>
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
    </Modal>
  )
}

export default NewProductModal
