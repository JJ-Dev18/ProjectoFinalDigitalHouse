import React from 'react'
import useFetch from '../hooks/useFetch'
import baseURL from '../hooks/axiosBase'

const FetchData = ({modo}) => {
    //const url = "http://52.14.228.70/DHBooking/cities";
    
    
    // investigar por que no funciona----
    //const { isLoading, errorMessage, apiData } = useFetch(baseURL+'cities');
    const  apiData  = useFetch(baseURL+'cities');

    console.log('estoy en el componente')
    console.log(apiData[0]);
    // if (isLoading) return (
    //     <div className={ modo ? "blackApp"  : "App" } >
    //         <p>Loading data...</p>
    //     </div>
    // )
    return (
        <div className={ modo ? "blackApp"  : "App" } >
            <h3>API DATA</h3>
            {/* {errorMessage ? <p>{errorMessage}</p> : <p>{apiData[0].name}</p>} */}
            {apiData.map( (item) => <p>{item.name}</p>    )}
        </div>
    )
}

export default FetchData