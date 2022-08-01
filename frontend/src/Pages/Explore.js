import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFetchData } from "../Services/Hooks/useFetchData";
import { allLinks } from "../Services/ApiCalls/AllApiCalls";

export default function Explore() {
  const { link } = useSelector((state) => state.link);
  const [isLoading, setIsLoading] = useState(true);

  console.log(link);

  useFetchData(`${allLinks}`);

  useEffect(() => {
    if (link) {
      setIsLoading(false);
    }
  }, [link]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        link.data.map((item) => {
          return (
            <div className="itemShow">
              <h1>{item.attributes.name}</h1>
              <p>{item.description}</p>
            </div>
          );
        })
      )}
    </>
  );
}
