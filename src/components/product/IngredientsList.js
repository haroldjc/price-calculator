import './IngredientsList.css';
import IngredientItem from './IngredientItem';

const IngredientsList = ({ product, supplies, handleAmountChange, handleDeleteIngredient }) => {

  return (
    <div className='ingredients-list'>
      {
        product.ingredients.length === 0
          ? <p className='no-ingredients'>Usa el buscador de ingredientes inferior para agregarlos a este producto.</p>
          : product.ingredients.map(ingredient =>
            <IngredientItem
              key={ingredient.id}
              ingredient={ingredient}
              supplies={supplies}
              handleAmountChange={handleAmountChange}
              handleDeleteIngredient={handleDeleteIngredient}
            />)
      }
    </div>
  );
}

export default IngredientsList;
