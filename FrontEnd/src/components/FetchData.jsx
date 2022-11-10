import React from 'react'
import useFetch from '../hooks/useFetch'
import baseURL from '../hooks/axiosBase'

const FetchData = ({modo}) => {
    //const url = "http://52.14.228.70/DHBooking/cities";
    const  { isLoading, error, response }  = useFetch(baseURL+'cities');

    console.log(response);
    if (isLoading) return (
         <div>
             <p>Loading data...</p>
         </div>
    )
    return (
        <div className='fetch'>
            <h1>API DATA</h1>
            {/* {error ? <p>{error}</p> : response.map( (item) => <p>{item.name}</p>)} */}
        </div>
    )
}

export default FetchData