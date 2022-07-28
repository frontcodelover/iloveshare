import React, {useState, useEffect} from 'react'
import useFetchDataForUser from '../../Services/Hooks/useFetchDataForUser'
import CardLink from '../Design/CardLink'
import { useParams } from 'react-router-dom'

const backendUrl = process.env.REACT_APP_API_URL

export default function UserResumePost() {
  const { id } = useParams();
  const [dataRes, setDataRes] = useState("{}");

  const { userInfos, isLoading, error } = useFetchDataForUser(
    `${backendUrl}/api/links?populate=*&filters[userid][$eq]=${id}`
  );

  useEffect(() => {
    fetch(`${backendUrl}/api/users/${id}?&populate=*`)
      .then((res) => res.json())
      .then((data) => setDataRes(data))
      .catch((err) => console.log(err));
  }, [id]);


  
  
  
  
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
