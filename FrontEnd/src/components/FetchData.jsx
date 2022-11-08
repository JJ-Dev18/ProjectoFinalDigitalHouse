import React from 'react'
import useFetch from '../hooks/useFetch'
import baseURL from '../hooks/axiosBase'

const FetchData = ({modo}) => {
    //const url = "http://52.14.228.70/DHBooking/cities";
    const  { isLoading, errorMessage, apiData }  = useFetch(baseURL+'cities');

    console.log(apiData);
    if (isLoading) return (
         <div>
             <p>Loading data...</p>
         </div>
    )
    return (
        <div className='fetch'>
            <h1>API DATA</h1>
            {errorMessage ? <p>{errorMessage}</p> : apiData.map( (item) => <p>{item.name}</p>)}
        </div>
    )
}

export default FetchData