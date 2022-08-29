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
  Collapse,
  Alert,
  AlertIcon,
  Box,
  Text,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const backendUrl = process.env.REACT_APP_API_URL;

export default function AddLinkView() {
  const { isOpen, onToggle } = useDisclosure();
  const { user } = useSelector((state) => state.user);
  const token = localStorage.getItem("jwt");
  const [inputs, setInputs] = useState({});
  const [inputsImg, setInputsImg] = useState({});
  const [message, setMessage] = useState("");
  const [inputBody, setInputBody] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImgChange = (e) => {
    setInputsImg({ featuredimg: e.target.files[0] });
  };

  const randomNumberForId = Math.floor(Math.random() * 100000);

  const formData = new FormData();
  formData.append("files", inputsImg.featuredimg);
  formData.append("ref", "api::link.link");
  formData.append("refId", randomNumberForId);
  formData.append("field", "featuredimg");

  const randomNumberForSlug = Math.floor(Math.random() * 10000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${backendUrl}/api/links`,
        {
          data: {
            userid: user.id,
            slug: inputs.name?.replace(/\W+/g, "-") + "-" + randomNumberForSlug,
            name: inputs.name,
            url: inputs.url,
            body: inputBody,
            type: inputs.type,
            nsfw: inputs.nsfw,
            public: inputs.public,
            id: randomNumberForId,
            tag: [
              {
                name: inputs.tag,
              },
            ],
          },
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        setMessage(
          <Alert status="success">
            <AlertIcon />
            Partage ajouté avec succés !
          </Alert>
        );
      })
      .catch((err) => {
        console.log(err);
        setMessage(
          <Alert status="error">
            <AlertIcon />
            Erreur lors de la publication. Veuillez vérifier tous les champs.
          </Alert>
        );
      });

    await axios
      .post(
        `${backendUrl}/api/upload`,
        formData,

        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
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
          <Text>{inputs.name}</Text>
          <div className="markdown-body">
            {/* <ReactMarkdown>{inputs.body}</ReactMarkdown> */}
          </div>
          <Button onClick={onToggle}>Besoin d'aide ?</Button>
          <Collapse in={isOpen} animateOpacity>
            <Box
              p="40px"
              color="white"
              mt="4"
              bg="teal.500"
              rounded="md"
              shadow="md"
            >
              <Text fontSize="sm" fontWeight="600">
                Pour ajouter un partage il vous suffit de remplir les champs
                ci-dessous. L'url doit être de la forme http://www.example.com
                Si le lien ne respect pas la charte du site il pourra être
                refusé par l'quipe de modération.
              </Text>
            </Box>
          </Collapse>
          <VStack spacing={2} align="stretch" w="75%" mt="4">
            <FormLabel>Image de couverture</FormLabel>
            <Input
              type="file"
              name="featuredimg"
              bg="white"
              border="none"
              placeholder="Your label here..."
              // value={inputs.featuredimg || ""}
              _focusVisible={false}
              onChange={handleImgChange}
            />
            <Input
              bg="white"
              type="text"
              name="name"
              color={"gray.900"}
              placeholder="Indiquez le titre de votre partage"
              fontWeight={500}
              border={"none"}
              fontSize="3xl"
              value={inputs.name || ""}
              onChange={handleChange}
              _focusVisible={{
                boxShadow: "none",
                borderColor: "teal.500",
              }}
            />
            <Stack height={'400px'}>

              <CKEditor
              editor={ClassicEditor}    
              data="<p>Hello from CKEditor 5!</p>"
              // value={inputs.body}
              onInit={(editor) => {
                // You can store the "editor" and use when it is needed.

                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log(typeof data);
                setInputBody(data);
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              />
              </Stack>

            {/* <Textarea
              bg="white"
              type="textarea"
              name="body"
              border={'none'}
              _focusVisible={{
                boxShadow: "none",
                borderColor: "teal.500",
              }}
              fontSize={'xl'}
              height={'500px'}
              placeholder="Ajoutez le texte de votre article
              Vous devez utiliser le markdown pour formater votre texte
              Pour faire un lien, utiliser la syntaxe : [titre du lien](url du lien)
              Pour faire une image, utiliser la syntaxe : ![titre de l'image](url de l'image)
                          Pour faire un titre, utiliser la syntaxe : # titre du titre
                          Pour faire un sous-titre, utiliser la syntaxe : ## sous-titre
                          Pour faire un paragraphe, utiliser la syntaxe : paragraphe du paragraphe
                          Pour écrire du code, utiliser la syntaxe : ```code```
                          "
              value={inputs.body || ""}
              onChange={handleChange}
            /> */}
            <Input
              bg="white"
              type="text"
              name="url"
              placeholder="Ajoutez l'url de votre partage"
              value={inputs.url || ""}
              onChange={handleChange}
            />
            <FormLabel>Tag</FormLabel>
            <Input
              bg="white"
              type="text"
              name="tag"
              placeholder="Indiquez des tags"
              value={inputs.tag || ""}
              onChange={handleChange}
            />

            {/* <input type="text" name="ref" value="api::links.links" />
            <input type="text" name="refId" value="5c126648c7415f0c0ef1bccd" /> */}

            <FormLabel>Quel est son type</FormLabel>
            <Select
              placeholder="Sélectionnez un type"
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
              Lien adulte
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
              Lien privé
            </Checkbox>

            <Button
              colorScheme="green"
              type="submit"
              w={{ base: "100%", md: "max-content" }}
            >
              Publier
            </Button>
            {message}
          </VStack>
        </FormControl>
      </form>
    </>
  );
}
