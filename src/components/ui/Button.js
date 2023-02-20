import './Button.css'

const Button = props => {

  let className = ''

  if (props.variant) {
    const variantClasses = props.variant.split(' ').map(variant => `button--${variant}`).join(' ')
    className = `button ${variantClasses}`
  } else {
    className = 'button'
  }

  return (
    <button className={className} onClick={props.onClick}>
      {props.label}
    </button>
  )
}

export default Button