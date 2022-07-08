import React, {useEffect, useState} from 'react'

export default function GetLastLinks() {

  const [links, setLinks] = useState([]);
 

  useEffect(() => {
    fetch('http://localhost:1337/api/links?populate=*&filters[tag][name]=architecture')
      .then(res => res.json())
      .then(data => setLinks(data.data))

      
      .catch(err => console.log(err))
    }, [])
    
    


  return (
    <div>
      {console.log(links)}
      {    links.map(link => {
        return (
          <div key={link.id}>
            <h1>{link.attributes.name}</h1>
            <p>{link.id}</p>
            <p>{link.attributes.url}</p>
            <p>{link.attributes.type}</p>
            {link.attributes.tag.map(tag => {
              return(
                <p>{tag.name}</p>
              )
            }) }
          </div>
        )
      }
      )}
    

    
      </div>
  )
}
