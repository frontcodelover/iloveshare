import React, {useState, useEffect} from 'react'
import useFetchDataForUser from '../../Services/Hooks/useFetchDataForUser'
import CardLink from '../Design/CardLink'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const backendUrl = process.env.REACT_APP_API_URL

export default function UserResumePost() {
  const { username } = useParams();
  const [dataRes, setDataRes] = useState("{}");
  const [dataForUserSelected, setDataForUserSelected] = useState("{}");
  const [dataLoaded, setDataLoaded] = useState(false);

  const { allUsers } = useSelector((state) => state.allUsers);
  
  useEffect(() => {
    fetch(`${backendUrl}/api/users?populate=*&filters[username][$eq]=${username}`)
      .then((res) => res.json())
      .then((data) => setDataRes(data))
      .catch((err) => console.log(err))

     if (dataRes[0] != null) {
      setDataLoaded(true)
      setDataForUserSelected(dataRes[0].id)
    }


    }, [username, allUsers]);

    
    const { userInfos, isLoading, error } = 
    
    useFetchDataForUser(
      `${backendUrl}/api/links?populate=*&filters[userid][$eq]=${dataForUserSelected}`
    );
 
    
    
    
    
 
    return (
    <>
      {!isLoading && (
        <>
        
          {userInfos?.data?.map((link) => (
            <CardLink 
            avatar={backendUrl + dataRes?.photo?.url}
            linkid={link.id}
            createdAt={link.attributes.createdAt}
            name={link.attributes.name}
            url={link.attributes.url}
            userId={link.attributes.userid}
            userName={dataRes.username}
            featuredImgSrc={backendUrl +
              link?.attributes?.featuredimg?.data?.attributes?.url}
            tagName={link?.attributes?.tag?.map((tag) => (tag.name))} 
            slug={link?.attributes?.slug}            
            />
            )
          )}
        </>
      )
      }
      </>
    
  )
}
