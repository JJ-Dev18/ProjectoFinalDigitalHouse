import { useState, useEffect } from "react";
import baseURL, { backendApi } from "./axiosBase";

export default function useFetch({
  api = backendApi,
  method = 'get',
  url,
  data = null,
  config = null,
}) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        api[method](url, JSON.parse(config), JSON.parse(data))
          .then((res) => {
            setResponse(res.data);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [api, method, url, data, config]);

  return { response, error, isLoading };
}
