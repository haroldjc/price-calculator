import './IngredientSearch.css';
import { useState, useEffect } from 'react';

const IngredientSearch = ({ addIngredientHandler, ingredientQuery, handleIngredientQueryChange, supplies }) => {

  const includesString = (string1, string2) => {
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()

    return string1.includes(string2)
  }

  const filteredSupplies = supplies.filter(supply => includesString(supply.name, ingredientQuery))

  return (
    <section className='ingredient-search'>
      <input onChange={handleIngredientQueryChange} value={ingredientQuery} type='search' name='search' placeholder='Buscar ingrediente' autoComplete='off' />
      <ul className='ingredient-search__results'>
        {
          ingredientQuery !== ''
            ? filteredSupplies.map(ingredient => <li key={ingredient.id} onClick={() => addIngredientHandler(ingredient.id)}>{ingredient.name}</li>)
            : <></>
        }
      </ul>
    </section>
  );
}

export default IngredientSearch;
