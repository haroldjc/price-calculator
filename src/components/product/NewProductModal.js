import './NewProductModal.css';
import IngredientSearch from './IngredientSearch';
import IngredientsList from './IngredientsList'

const NewProductModal = ({ newProduct, addIngredientHandler, display, displayHandler }) => {

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
              <IngredientsList ingredients={newProduct.ingredients} />
              <h3 className='modal__subtitle'>Agregar ingrediente</h3>
              <IngredientSearch addIngredientHandler={addIngredientHandler} />
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
