import './Button.css'

const Button = props => {

  const className = `button${props.variant ? ` button--${props.variant}` : ''}`

  return (
    <button className={className} onClick={props.onClick}>
      {props.label}
    </button>
  )
}

export default Button