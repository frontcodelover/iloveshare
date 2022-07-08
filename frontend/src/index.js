import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./components/Trending";
import SidebarWithHeader from "./components/Layout/Sidebar";
import Home from "./components/Home/Home";
import Favourites from "./components/Favourites";
import Explore from "./components/Explore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <React.StrictMode>
      <SidebarWithHeader >
        <App />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </SidebarWithHeader >
      </React.StrictMode>
    </ChakraProvider>
  </BrowserRouter>
);


reportWebVitals();
