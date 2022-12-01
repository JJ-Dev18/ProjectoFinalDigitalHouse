import React, {useState} from 'react';


const BookingContext = React.createContext({})

export function BookingProvider ({children}) {
  const [range, setRange] = useState([null, null]);
  const [city, setCity] = useState("")
  return <BookingContext.Provider value={{range, setRange,city,setCity}}>
    {children}
  </BookingContext.Provider>
}

export default BookingContext;