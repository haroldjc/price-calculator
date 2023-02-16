import './NewProductModal.css';
import IngredientSearch from './IngredientSearch';

const NewProductModal = ({ addIngredientHandler }) => {
  return (
    <div className='modal'>
      <div className='modal__inner'>
        <header className='modal__header'>
          <h3 className='modal__title'>Nuevo producto</h3>
        </header>
        <article>
          <form>
            <div>
              <input type='text' name='name' placeholder='Nombre' autoComplete='off'></input>
            </div>
            <div>
              <button>Agregar ingrediente</button>
            </div>
            <IngredientSearch addIngredientHandler={addIngredientHandler} />
            <div>
              <button>Guardar</button>
            </div>
          </form>
        </article>
        <footer className='modal__footer'>
          <button className='button'>Guardar</button>
          <button className='button button--secondary'>Cancelar</button>
        </footer>
      </div>
    </div>
  );
}

export default NewProductModal;
