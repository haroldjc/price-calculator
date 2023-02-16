import './IngredientSearch.css';
import { useState, useEffect } from 'react';
import suppliesService from '../../services/supplies'

const IngredientSearch = ({ addIngredientHandler }) => {
  const [supplies, setSupplies] = useState([])
  const [ingredientQuery, setIngredientQuery] = useState('')

  useEffect(() => {
    suppliesService
      .getAll()
      .then(supplies => {
        setSupplies(supplies)
      })
  }, [])

  const includesString = (string1, string2) => {
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()

    return string1.includes(string2)
  }

  const filteredSupplies = supplies.filter(supply => includesString(supply.name, ingredientQuery))

  const handleIngredientQueryChange = event => {
    setIngredientQuery(event.target.value)
  }

  return (
    <section className='ingredient-search'>
      <input onChange={handleIngredientQueryChange} type='search' name='search' placeholder='Buscar ingrediente' autoComplete='off' />
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
