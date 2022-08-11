import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider} from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Services/Redux/app/store";
import Frame from "./components/Layout/Frame";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <React.StrictMode>
        <Provider store={store}>
          <Frame />
        </Provider>
      </React.StrictMode>
    </ChakraProvider>
  </BrowserRouter>
);

reportWebVitals();
