import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarWithHeader from "./components/Layout/Sidebar";
import { Provider } from "react-redux";
import store from "./app/store";
import Routing from "./Routing/Routing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <React.StrictMode>
        <Provider store={store}>
          <Container maxW="1280px">
            <SidebarWithHeader>
              <App />
              <Routing />
            </SidebarWithHeader>
          </Container>
        </Provider>
      </React.StrictMode>
    </ChakraProvider>
  </BrowserRouter>
);

reportWebVitals();
