import React from "react";
import GoogleButton from "../User/GoogleButton";
import GetLastLinks from "./GetLastLinks";

export default function Home() {
  return (
    <div>
      <GetLastLinks />
      <GoogleButton />
    </div>
  );
}
