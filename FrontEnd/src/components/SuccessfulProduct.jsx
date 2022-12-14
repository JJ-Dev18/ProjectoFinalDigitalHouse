import "./styles/successful-booking.css"
import success from "../resources/success-icon.svg"
import { Link } from "react-router-dom";

const SuccessfulProduct = () => {
  return (
    <div className='successful-booking'>
       <img src={success}></img>
       <span>La propiedad se ha creado con éxito</span>
       <Link to="/">
        <button>Volver</button>
       </Link>
    </div>
  )
}

export default SuccessfulProduct