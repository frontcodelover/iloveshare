
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useFetchData } from "./Hooks/useFetchData";


export default function Explore() {
  const backendUrl = process.env.REACT_APP_API_URL;
  const { link } = useSelector((state) => state.link)
  const [isLoading, setIsLoading] = useState(true);

  
  console.log(link)
  

   useFetchData(
     `${backendUrl}/api/links?populate=*`
     );
    useEffect(() => {
      if (link) {
        setIsLoading(false);
      }
    }
    , [link]);



  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
          ) : (
    link.data.map((item) => {
      return (
        <div>
          <h1>{item.attributes.name}</h1>
          <p>{item.description}</p>
        </div>
      )
    }
    )
    )
    }

    </>
  )
}
