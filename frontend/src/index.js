import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./components/Trending";
import SidebarWithHeader from "./components/Layout/Sidebar";
import Home from "./components/Home/Home";
import Favourites from "./components/Favourites";
import Explore from "./components/Explore";
import PostByTags from "./components/Tags/PostByTags";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <React.StrictMode>
        <Container maxW="1280px">
      <SidebarWithHeader >
        <App />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/t/:tags" element={<PostByTags />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
          </SidebarWithHeader >
      </Container>
      </React.StrictMode>
    </ChakraProvider>
  </BrowserRouter>
);


reportWebVitals();
