import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useFetchDataByTags() {
  let { tags } = useParams();

  const [dataResFilterByTags, setDataResFilterByTags] = useState([]);
  const backendUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    let shouldCancel = false;
    async function fetchData() {
      try {
        const res = await fetch(
          `${backendUrl}/api/links?populate=*&filters[tag][name]=${tags}`
        );
        if (res.ok) {
          const data = await res.json();
          if (!shouldCancel) {
            setDataResFilterByTags(data.data);
          }
        } else {
          throw new Error("Something went wrong");
        }
      } catch (err) {
        console.log("Tu as une erreur", err);
      }
    }
    fetchData();
    return () => {
      shouldCancel = true;
    };
  }, [backendUrl, tags]);

  return dataResFilterByTags;
}
