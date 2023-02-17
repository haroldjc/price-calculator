const IngredientItem = ({ ingredient, supplies }) => {

  const getNameByID = id => {
    return supplies.find(supply => supply.id === id).name
  }

  return (
    <div className="ingredient-item">
      <span>{getNameByID(ingredient.id)}</span>
      <input type='text' value={ingredient.amount} />
      <button>x</button>
    </div>
  );
}

export default IngredientItem;
