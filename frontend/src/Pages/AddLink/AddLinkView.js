import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  VStack,
  Select,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import axios from "axios";
import { nanoid } from 'nanoid'

const backendUrl = process.env.REACT_APP_API_URL;

export default function AddLinkView() {
  const { user } = useSelector((state) => state.user);
  console.log(user.id);
  const token = localStorage.getItem("jwt");
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImgChange = (e) => {
    setInputs({featuredimg: e.target.files[0]});
  }

  console.log(inputs.featuredimg);
  
  const randomNumberForId = Math.floor(Math.random() * 10000000);

  const formData = new FormData();
  formData.append("files", inputs.featuredimg);
  formData.append("ref", "api::link.link");
  formData.append("refId", randomNumberForId);
  formData.append("field", "featuredimg");
  
  const randomNumberForSlug = Math.floor(Math.random() * 10000);
  console.log(randomNumberForSlug);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      `${backendUrl}/api/links`,
      {
        data: {
          userid: user.id,
          slug: inputs.name.replace(/\W+/g, "-") + "-" + randomNumberForSlug,
          name: inputs.name,
          url: inputs.url,
          body: inputs.body,
          type: inputs.type,
          nsfw: inputs.nsfw,
          public: inputs.public,
          id: randomNumberForId,
        },
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    //! Need to fix this part
    await axios
      .post(
        `${backendUrl}/api/upload`,
        formData,
  
        { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" }  }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl bg="white" p={6} rounded="xl">
          <Heading as="h1" size="xl" pb={6}>
            Ajouter un article
          </Heading>
          <VStack spacing={2} align="stretch" w="75%">
            <FormLabel>URL</FormLabel>
            <Input
              bg="white"
              type="text"
              name="url"
              placeholder="Add your URL"
              value={inputs.url || ""}
              onChange={handleChange}
            />
            <FormLabel>Titre</FormLabel>
            <Input
              bg="white"
              type="text"
              name="name"
              placeholder="Name"
              value={inputs.name || ""}
              onChange={handleChange}
            />
            <FormLabel>Image</FormLabel>
            <Input
              type="file"
              name="featuredimg"
              placeholder="Featured Image"
              // value={inputs.featuredimg || ""}
              onChange={handleImgChange}
            />
            {/* <input type="text" name="ref" value="api::links.links" />
            <input type="text" name="refId" value="5c126648c7415f0c0ef1bccd" /> */}

            <FormLabel>Description </FormLabel>
            <Textarea
              bg="white"
              type="textarea"
              name="body"
              placeholder="Add your description"
              value={inputs.body || ""}
              onChange={handleChange}
            />
            <FormLabel>Type</FormLabel>
            <Select
              placeholder="Select option"
              name="type"
              onChange={handleChange}
            >
              <option value="lien">lien</option>
              <option value="image">image</option>
              <option value="video">video</option>
            </Select>
            <FormLabel>Votre lien est pour un public adulte ?</FormLabel>
            <Checkbox
              colorScheme="red"
              bg="white"
              type="checkbox"
              name="nsfw"
              placeholder="nsfw"
              value={true || false}
              onChange={handleChange}
            >
              Adult only
            </Checkbox>
            <FormLabel>Rendre ce lien privé</FormLabel>
            <Checkbox
              colorScheme="red"
              bg="white"
              type="checkbox"
              name="public"
              placeholder="public"
              value={true || false}
              onChange={handleChange}
            >
              Private link
            </Checkbox>

            <Button
              colorScheme="green"
              type="submit"
              w={{ base: "100%", md: "max-content" }}
            >
              Submit
            </Button>
          </VStack>
        </FormControl>
      </form>
    </>
  );
}
