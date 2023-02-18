const IngredientItem = ({ ingredient, supplies, handleAmountChange }) => {

  const supply = supplies.find(supply => supply.id === ingredient.id)

  return (
    <div className='ingredient-item'>
      <span className='ingredient-item__name'>
        {supply.name}
      </span>
      <input type='number' value={ingredient.amount} onChange={e => handleAmountChange(ingredient.id, e)} />
      <span className='ingredient-item__unit'>
        {supply.unit}
      </span>
      <button>x</button>
    </div>
  );
}

export default IngredientItem;
