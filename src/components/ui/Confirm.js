import './Confirm.css'
import Button from './Button'

const Confirm = props => {

  if (!props.display) {
    return null
  }

  return (
    <div className='confirm-box'>
      <div className='confirm-box__container'>
        <p className='confirm-box__msg'>
          {props.message}
        </p>
        <footer className='confirm-box__footer'>
          <Button
            label={props.confirmLabel || 'Aceptar'}
            onClick={props.confirmClick}
          />
          <Button
            label={props.cancelLabel || 'Cancelar'}
            variant='secondary'
            onClick={props.cancelClick}
          />
        </footer>
      </div>
    </div>
  )
}

export default Confirm