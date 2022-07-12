import React, { useEffect, useState } from "react";
import { useFetchData } from "../Hooks/useFetchData";

const backendUrl = process.env.REACT_APP_API_URL;

export default function GetLastLinks() {

  const [pageCountMax, setPageCountMax] = useState(0);

  const [page, setPage] = useState(1);
  const {
    data: lastLinks,
    isLoading,
    error,
  } = useFetchData(
    `${backendUrl}/api/links?populate=*&pagination[pageSize]=2&pagination[page]=${page}`
  );

  useEffect(() => {
    if (!isLoading) {
      function getPagination() {

        setPageCountMax(lastLinks.meta.pagination.pageCount);
      }
      getPagination();
    }
  }, [lastLinks, isLoading]);

  //counter for pagination

  const handleNext = () => {
    if (page < pageCountMax) {
      setPage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  console.log("Page numero :", page);

  const randomNumberForKey = Math.floor(Math.random(0, 1) * 5000);

  return (
    <div>
      <input type="button" value="Next" onClick={handleNext} />
      <input type="button" value="Previous" onClick={handlePrevious} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        lastLinks.data.map((link) => {
          return (
            <div key={link.id}>
              <h1>{link.attributes.name}</h1>
              <p>{link.id}</p>
              <p>{link.attributes.url}</p>
              <p>{link.attributes.type}</p>
              {link.attributes.tag.map((tag) => {
                return (
                  <div key={tag.id * randomNumberForKey}>
                    <p>{tag.name}</p>
                  </div>
                );
              })}
            </div>
          );
        })
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
