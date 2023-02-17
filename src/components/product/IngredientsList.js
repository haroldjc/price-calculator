import './IngredientsList.css';
import IngredientItem from './IngredientItem';

const IngredientsList = ({ ingredients, supplies }) => {

  return (
    <div className='ingredients-list'>
      {
        ingredients.length === 0
          ? <p className='no-ingredients'>Usa el buscador de ingredientes inferior para agregarlos a este producto.</p>
          : ingredients.map(ingredient => <IngredientItem key={ingredient.id} ingredient={ingredient} supplies={supplies} />)
      }
    </div>
  );
}

export default IngredientsList;
