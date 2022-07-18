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
import LoginRedirect from "./components/User/LoginRedirect";
import SignUp from "./components/User/SignUp";
import Dashboard from "./components/User/Dashboard";
import PageNotFound from "./404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <React.StrictMode>
        <Container maxW="1280px">
      <SidebarWithHeader >
        <App />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/t/:tags" element={<PostByTags />} />
            <Route exact path="/trending" element={<Trending />} />
            <Route exact path="/favourites" element={<Favourites />} />
              <Route exact path="/explore" element={<Explore />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/dashboard/:id" element={<Dashboard />} />
              <Route exact path="/connect/:providerName/redirect" component={LoginRedirect} />
              <Route path="*" element={<PageNotFound />} />
          </Routes>
          </SidebarWithHeader >
      </Container>
      </React.StrictMode>
    </ChakraProvider>
  </BrowserRouter>
);


reportWebVitals();
