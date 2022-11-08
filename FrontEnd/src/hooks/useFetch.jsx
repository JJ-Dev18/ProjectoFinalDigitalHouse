import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("")
  
    useEffect(() => {
      setIsLoading(true);
      const fetchData = async () => {
        try {
            const response = await axios(url);
            //console.log('HOLAAAAAAAAAAAAAAAAAAAAAAAAAA')
            //console.log(response.data[0].name)
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

    //return { isLoading, apiData, errorMessage };
    return apiData;

  };

export default useFetch;