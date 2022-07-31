import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLinkData } from "../../Services/Redux/feature/link.slice";
import { transformStratipResToLink } from "../ApiCalls/TransformStratipResToLink";

export function useFetchData(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch() 

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          if (!ignore) {
            const fetchedData = await response.json();
            setData(fetchedData);
            const disp = dispatch(setLinkData(fetchedData));

          }
        } else {
          setError("Error");
        }
      } catch (err) {
        setError("custom hook error", err);
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }
    fetchData();
    return () => {
      ignore = true;
    };
  }, [url, dispatch]);

  return {
    data,
    isLoading,
    error,
    dispatch,
  };
}
