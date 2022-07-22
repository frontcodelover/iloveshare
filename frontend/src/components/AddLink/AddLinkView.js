import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  VStack,
  Select,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import axios from "axios";

const backendUrl = process.env.REACT_APP_API_URL;

export default function AddLinkView() {
  const { user } = useSelector((state) => state.user);

  const token = localStorage.getItem("jwt");
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(name)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${backendUrl}/api/links`,
        {
          data: {
            userid: user?.user.id,
            ...inputs,
          },
        },
        { headers: { Authorization: `Bearer ${token}` } }
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
      <h1>Add Link</h1>
      <form onSubmit={handleSubmit}>
        <FormControl bg="white" p={6} rounded="xl">
          <VStack spacing={2} align="stretch">
            <FormLabel>Your URL</FormLabel>
            <Input
              bg="white"
              type="text"
              name="url"
              placeholder="Add your URL"
              value={inputs.url || ""}
              onChange={handleChange}
              isRequired
            />
            <FormLabel>Title of your link</FormLabel>
            <Input
              bg="white"
              type="text"
              name="name"
              placeholder="Name"
              value={inputs.name || ""}
              onChange={handleChange}
              isRequired
            />

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
            <Select placeholder="Select option" name='type' onChange={handleChange}>
              <option value="lien">lien</option>
              <option value="image">image</option>
              <option value="video">video</option>
            </Select>

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

            <Button colorScheme="green" type="submit">
              Submit
            </Button>
          </VStack>
        </FormControl>
      </form>
    </>
  );
}
