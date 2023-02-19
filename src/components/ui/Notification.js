import './Notification.css'

const Notification = props => {

  if (!props.display) {
    return null
  }

  return (
    <section className='notification notification--success'>
      <figure className='notification__icon'></figure>
      <p className='notification__message'>El producto fue agregado correctamente</p>
    </section>
  )
}

export default Notification