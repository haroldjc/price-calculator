const IngredientItem = ({ ingredient, supplies, handleAmountChange, handleDeleteIngredient }) => {

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
      <button className='ingredient-item__delete' onClick={() => handleDeleteIngredient(ingredient.id)}>x</button>
    </div>
  );
}

export default IngredientItem;
