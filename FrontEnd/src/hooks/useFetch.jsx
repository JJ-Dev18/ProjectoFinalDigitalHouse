import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("")
  
    useEffect(() => {
      setIsLoading(true);
      console.log('hola')
      const fetchData = async () => {
        try {
            const response = await axios(url);
            console.log('hola')
            setApiData(response.data)
        } 
        catch (error) {
            setErrorMessage(error.message);
        }
        finally{
            setIsLoading(false);
        }
      };
      fetchData();
    }, [url]);
    return { isLoading, errorMessage, apiData } ;
  };

export default useFetch;