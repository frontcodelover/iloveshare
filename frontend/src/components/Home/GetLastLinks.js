import React, {useEffect, useState} from 'react'

export default function GetLastLinks() {

  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const backendUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    let shouldCancel = false;
    async function fetchData() {
      try {
        const res = await fetch(`${backendUrl}/api/links?populate=*`);
        if (res.ok) {
          const data = await res.json();
          if (!shouldCancel) {
            setLinks(data.data);
          }
        } else {
          throw new Error('Something went wrong');
        }
      }
      catch (err) {
        console.log("Tu as une erreur", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => {
      shouldCancel = true;
    }
  }, [backendUrl]);

    
    const randomNumberForKey = Math.floor(Math.random() * links.length);
    

  return (
    <div>
      {console.log(links)}
      {loading ? <p>Loading...</p> : 
      links.map(link => {
        return (
          <div key={randomNumberForKey}>
            <h1>{link.attributes.name}</h1>
            <p>{link.id}</p>
            <p>{link.attributes.url}</p>
            <p>{link.attributes.type}</p>
            {link.attributes.tag.map(tag => {
              return (
  
                  <p>{tag.name}</p>

              )
            })}
          </div>
   
        )
      }
      )}
    

    
      </div>
  )
}
