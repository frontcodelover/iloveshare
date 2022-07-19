import React from 'react'
import { useSelector } from 'react-redux'
import { useFetchData } from "./Hooks/useFetchData";

export default function Explore() {
  const backendUrl = process.env.REACT_APP_API_URL;
  const dataExplore = useSelector(state => state.link.link)
  console.log(dataExplore)
   useFetchData(
    `${backendUrl}/api/links?populate=*`
  );


  return (
    <>
    {/* {dataExplore.map((item, index) => {
      return (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      )
    }
    )} */}
    </>
  )
}
