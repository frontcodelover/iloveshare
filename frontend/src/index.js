import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, Container, Grid, GridItem } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Services/Redux/app/store";
import Routing from "./Services/Routing/Routing";
import Layout from "./components/Layout/Layout";
import SidebarLeft from "./components/Layout/SidebarLeft";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <React.StrictMode>
        <Provider store={store}>
          <Grid templateColumns='(1, 1fr)' gap={4} h={'50px'} position={'relative'} zIndex={2}>
            <GridItem w='full' bg={'white'} h='65px' position={'fixed'} borderBottom={"1px"} borderColor={'gray.200'}>
            <Container maxW="1280px" className="scroll">
            <Layout />
            </Container>
            </GridItem>
              </Grid>
           
            <Container maxW="1280px" className="scroll" >
          
              <App />
              <SidebarLeft>
            {/* <Layout > */}
              <Routing />
            {/* </Layout> */}
              </ SidebarLeft>

          </Container>

        </Provider>
      </React.StrictMode>
    </ChakraProvider>
  </BrowserRouter>
);

reportWebVitals();
