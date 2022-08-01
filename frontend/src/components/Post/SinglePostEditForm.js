import React, { useEffect, useState } from 'react'
import { useFetchData } from '../../Services/Hooks/useFetchData';
import { allLinks, populateAll } from '../../Services/ApiCalls/AllApiCalls';
import { useParams } from 'react-router-dom';
import {Wrap, Image, Text, Skeleton, Heading, Input, Button } from "@chakra-ui/react";
import axios from 'axios';

export default function SinglePostEditForm() {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [link, setLink] = useState([]);
  const [name, setName] = useState("");

  const {id} = useParams();
  const backendUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {

     fetch(`${backendUrl}/api/links/${id}?populate=*`)
      .then(res => res.json())
      .then(data => {
        setLink(data.data.attributes);
        setName(data.data.attributes.name);
      }
      )
    
  }, [id, backendUrl]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios.put(`${backendUrl}/api/links/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      data :{
        name: name,
      },
      
    })
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        setError(null);
      }
      )
      .catch(err => {
        setIsLoading(false);
        setError(err);
      }
      )
  }



  return (
    <>
    <form onSubmit={handleSubmit}>

    <Input 
    type={"text"}
    placeholder={link.name}
    value={name}  
    onChange={(e) => setName(e.target.value)}
    />
      
      <Button
              colorScheme="green"
              type="submit"
              w={{ base: "100%", md: "max-content" }}
            >
              Publier
            </Button>
    </form>
      {/* {
        singlePostData?.data?.map((link) => (
          <Wrap>
          <Text>{link?.attributes?.name}</Text>
          <Text>{link?.attributes?.body}</Text>
          <Text>{link?.attributes?.featuredimg?.data?.attributes?.url}</Text>
          <Text>{link?.attributes?.slug}</Text>
          <Text>{link?.attributes?.user?.data?.attributes?.name}</Text>
          <Text>{link?.attributes?.user?.data?.attributes?.email}</Text>
        </Wrap>
      ))
    } */}
    
    </>
  )
}
