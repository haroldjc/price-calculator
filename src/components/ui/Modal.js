import './Modal.css'

const Modal = props => {
  return (
    <div className='modal'>
      <div className='modal__inner'>
        <header className='modal__header'>
          <h2 className='modal__title'>{props.title}</h2>
        </header>
        <article className='modal__content'>
          {props.children}
        </article>
        {
          props.buttons.length > 0 &&
            <footer className='modal__footer'>
              {props.buttons.map(button => button)}
            </footer>
        }
      </div>
    </div>
  )
}

export default Modal