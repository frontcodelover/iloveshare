import { useEffect, useState } from "react";

export default function useFetchDataForUser(url) {
    const [dataLinks, setDataLinks] = useState([]);
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
                        setDataLinks(fetchedData);

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
    }, [url]);


    return {
        dataLinks,
        isLoading,
        error,
    };
}
