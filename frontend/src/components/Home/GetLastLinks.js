import React from "react";
import { useFetchData } from "../Hooks/useFetchData";

const backendUrl = process.env.REACT_APP_API_URL;

export default function GetLastLinks() {
  const {
    data: lastLinks,
    isLoading,
    error,
  } = useFetchData(`${backendUrl}/api/links?populate=*`);

  const randomNumberForKey = Math.floor(Math.random() * lastLinks.length);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        lastLinks.map((link) => {
          return (
            <div key={randomNumberForKey}>
              <h1>{link.attributes.name}</h1>
              <p>{link.id}</p>
              <p>{link.attributes.url}</p>
              <p>{link.attributes.type}</p>
              {link.attributes.tag.map((tag) => {
                return <p>{tag.name}</p>;
              })}
            </div>
          );
        })
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
