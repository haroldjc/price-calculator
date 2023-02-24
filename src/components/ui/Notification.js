import './Notification.css'

const Notification = props => {
  const className = `notification notification--${props.type || 'success'}${props.display ? ' notification--show' : ''}`

  return (
    <section className={className}>
      <figure className='notification__icon'></figure>
      <p className='notification__message'>{props.message}</p>
    </section>
  )
}

export default Notification