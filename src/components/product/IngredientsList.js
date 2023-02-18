import './IngredientsList.css';
import IngredientItem from './IngredientItem';

const IngredientsList = props => {

  return (
    <div className='ingredients-list'>
      {
        props.product.ingredients.length === 0
          ? <p className='no-ingredients'>Usa el buscador de ingredientes inferior para agregarlos a este producto.</p>
          : props.product.ingredients.map(ingredient =>
            <IngredientItem
              key={ingredient.id}
              ingredient={ingredient}
              supplies={props.supplies}
              handleAmountChange={props.handleAmountChange}
              handleDeleteIngredient={props.handleDeleteIngredient}
            />)
      }
    </div>
  );
}

export default IngredientsList;
