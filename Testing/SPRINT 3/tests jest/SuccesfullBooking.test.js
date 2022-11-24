import SuccesfullBooking from "../components/SuccessfulBooking.jsx"
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

test("Se renderiza el mensaje de exito", ()=>{
  render(<SuccesfullBooking/>);
  const message = screen.getByText(/Su reserva se ha realizado con éxito/i);
  expect(message).toBeInTheDocument()
})