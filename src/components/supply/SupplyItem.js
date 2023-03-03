import './SupplyItem.css'

const SupplyItem = props => {

  const units = ['g', 'kg', 'ml', 'l', 'u', 'tsp', 'tbsp']

  return (
    <div className='supply-item'>
      <div className='supply-item__name'>{props.supply.name}</div>
      <div className='supply-item__price'>
        <input type='number' value={props.supply.price} onChange={props.handleFieldChange('price', props.supply.id)} />
        <span>Soles</span>
      </div>
      <div className='supply-item__amount'>
        <input type='number' value={props.supply.weight} onChange={props.handleFieldChange('weight', props.supply.id)} />
        <select defaultValue={props.supply.unit} onChange={props.handleFieldChange('unit', props.supply.id)}>
          {
            units.map((unit, i) => <option key={i} value={unit}>{unit}</option>)
          }
        </select>
      </div>
      <button className='supply-item__delete' onClick={props.handleDeleteSupply(props.supply.id)}>x</button>
    </div>
  )
}

export default SupplyItem