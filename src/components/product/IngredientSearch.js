import './IngredientSearch.css';
import { useState, useEffect } from 'react';

const IngredientSearch = props => {

  const includesString = (string1, string2) => {
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()

    return string1.includes(string2)
  }

  const filteredSupplies = props.supplies.filter(supply => includesString(supply.name, props.ingredientQuery))

  return (
    <section className='ingredient-search'>
      <input onChange={props.handleIngredientQueryChange} value={props.ingredientQuery} type='search' name='search' placeholder='Buscar ingrediente' autoComplete='off' />
      <ul className='ingredient-search__results'>
        {
          props.ingredientQuery !== ''
            ? filteredSupplies.map(ingredient => <li key={ingredient.id} onClick={() => props.handleAddIngredient(ingredient.id)}>{ingredient.name}</li>)
            : <></>
        }
      </ul>
    </section>
  );
}

export default IngredientSearch;
