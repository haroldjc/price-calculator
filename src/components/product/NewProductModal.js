import './NewProductModal.css';
import IngredientSearch from './IngredientSearch';

const NewProductModal = ({ addIngredientHandler }) => {
  return (
    <div className='modal'>
      <div className='modal__inner'>
        <h3>Nuevo producto</h3>
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
      </div>
    </div>
  );
}

export default NewProductModal;
