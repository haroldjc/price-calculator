const IngredientItem = props => {

  const supply = props.supplies.find(supply => supply.id === props.ingredient.id)

  return (
    <div className='ingredient-item'>
      <span className='ingredient-item__name'>
        {supply.name}
      </span>
      <input type='number' value={props.ingredient.amount} onChange={e => props.handleAmountChange(props.ingredient.id, e)} />
      <span className='ingredient-item__unit'>
        {supply.unit}
      </span>
      <button className='ingredient-item__delete' onClick={() => props.handleDeleteIngredient(props.ingredient.id)}>x</button>
    </div>
  );
}

export default IngredientItem;
