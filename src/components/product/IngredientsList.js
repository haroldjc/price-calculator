import './IngredientsList.css';

const NewProductModal = ({ ingredients }) => {

  return (
    <div className='ingredients-list'>
      {
        ingredients.length === 0
          ? <p className='no-ingredients'>Usa el buscador de ingredientes inferior para agregarlos a este producto.</p>
          : ingredients.map(item => <p>{item.id}</p>)
      }
    </div>
  );
}

export default NewProductModal;
