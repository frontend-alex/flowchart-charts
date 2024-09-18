import axios from "axios";
import { useEffect, useState } from "react";

export type TuseFetch<T> = {
  url: string;
  initialState?: T
};

const useFetch = <T>({ url, initialState }: TuseFetch<T>) => {
    const [data, setData] = useState<T | undefined>(initialState);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoaded(false); 
        try {
          const response = await axios.get<T>(url);
          setData(response.data);
          setIsLoaded(true); 
        } catch (err: any) {
          setIsLoaded(true);
        }
      };
  
      fetchData();
    }, [url]); 
  
    return { data, isLoaded };
};

export default useFetch;
