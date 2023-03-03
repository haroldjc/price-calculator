import Modal from "../ui/Modal";
import Button from "../ui/Button";
import SupplyItem from "./SupplyItem";

const SupplyManagerModal = props => {

  if (!props.display) {
    return null
  }

  const handleFieldChange = (field, id) => {
    return e => {
      const suppliesCopy = structuredClone(props.supplies)
      const value = /\b(price|weight)\b/.test(field)
        ? Number(e.target.value)
        : e.target.value

      suppliesCopy.find(i => i.id === id)[field] = value
      props.setSupplies(suppliesCopy)
    }
  }

  const handleDeleteSupply = id => {
    return () => {
      props.setSupplies(props.supplies.filter(supply => supply.id !== id))
    }
  }

  console.log(props.supplies)

  const modalButtons = [
    <Button key='1' label="Guardar cambios" onClick={null} />,
    <Button key='2' label="Cancelar" onClick={null} variant='secondary' />
  ]

  return (
    <Modal title="Gestionar suministros" buttons={modalButtons}>
      {
        props.supplies.map(supply =>
          <SupplyItem
            key={supply.id}
            supply={supply}
            handleFieldChange={handleFieldChange}
            handleDeleteSupply={handleDeleteSupply}
          />
        )
      }
    </Modal>
  )
}

export default SupplyManagerModal