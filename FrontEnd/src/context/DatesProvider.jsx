import React, {useState} from 'react';


const DatesContext = React.createContext({})

export function DatesProvider ({children}) {
  const [range, setRange] = useState([new Date(), null]);

  return <DatesContext.Provider value={{range, setRange}}>
    {children}
  </DatesContext.Provider>
}

export default DatesContext;