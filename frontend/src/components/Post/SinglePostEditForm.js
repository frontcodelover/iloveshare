import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  VStack,
  Heading,
  Input,
  Button,
  Textarea,
  FormLabel,
  Select,
  FormControl,
} from "@chakra-ui/react";
import axios from "axios";

export default function SinglePostEditForm() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [link, setLink] = useState([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [type, setType] = useState("");
  const token = localStorage.getItem("jwt");

  const { id } = useParams();
  const backendUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${backendUrl}/api/links/${id}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setLink(data.data.attributes);
        setName(data.data.attributes.name);
        setBody(data.data.attributes.body);
        setType(data.data.attributes.type);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, backendUrl]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .put(`${backendUrl}/api/links/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          name: name,
          body: body,
          type: type,
        },
      })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl bg="white" p={6} rounded="xl">
          <Heading as="h1" size="xl" pb={6}>
            Editer l'article
          </Heading>
          <VStack spacing={2} align="stretch" w="100%">
            <FormLabel htmlFor="name">Titre de l'article</FormLabel>
            <Input
              type={"text"}
              placeholder={link.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              bg="white"
            />

            <FormLabel htmlFor="body">Description</FormLabel>
            <Textarea
              height={400}
              type={"text"}
              placeholder={link.body}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <Select
              name="type"
              placeholder={link.type}
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Type</option>
              <option value="article">Article</option>
              <option value="video">Video</option>
              <option value="image">Image</option>
              <option value="lien">Lien</option>
            </Select>

            <Button
              colorScheme="green"
              type="submit"
              w={{ base: "100%", md: "max-content" }}
            >
              Publier
            </Button>
          </VStack>
        </FormControl>
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
  );
}
