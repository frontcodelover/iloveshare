import { useRouter } from "next/router";
import Login from "../components/login";
import React, { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  console.log(router.query);

  return (
    <>
      <div className="container mx-auto">
        <Login />
      </div>

    </>
  );
}
