import './ProductItem.css'

const ProductItem = props => {
  return (
    <div className='product-item'>
      <figure className='product-item__pic'></figure>
      <div className='product-item__content'>
        <strong className='product-item__name'>
          {props.product.name}
        </strong>
        <span className='product-item__details'>
          {props.product.ingredients.length} ingredientes / Precio: S/10.00
        </span>
      </div>
    </div>
  )
}

export default ProductItem