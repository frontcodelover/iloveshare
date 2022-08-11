import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAllUsersData } from "../../Services/Redux/feature/allUsers.slice";

export default function useFetchDataForUser(url) {
  const dispatch = useDispatch();
  const [userInfos, setUserInfos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          if (!ignore) {
            const fetchedData = await response.json();
            setUserInfos(fetchedData);
            setAllUsersData(fetchedData);
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
    userInfos,
    isLoading,
    error,
  };
}
