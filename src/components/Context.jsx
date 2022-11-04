import {createContext, useContext, useState} from 'react'

export const GlobalStates = createContext()

const Context = ({children}) => {

    const [datesPicked, setDatesPicked] = useState([])

    return (
        <GlobalStates.Provider
            value={{
                datesPicked, 
                setDatesPicked,
            }}
        >
            {children}
        </GlobalStates.Provider>
    )
}

export const useGlobalStates = () => {
    return useContext(GlobalStates)
}

export default Context