import "./styles/successful-booking.css"
import success from "../resources/success-icon.svg"

const SuccessfulBooking = () => {
  return (
    <div className='successful-booking'>
       <img src={success}></img>
       <p>¡Muchas gracias!</p>
       <span>Su reserva se ha realizado con éxito</span>
       <button>OK</button>
    </div>
  )
}

export default SuccessfulBooking