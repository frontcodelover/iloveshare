import Head from "next/head";
import { useRouter } from "next/router";

import Component from "../components/login-btn";
import Login from "../components/login";
import React, { useState, useEffect } from "react";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  //write function to fetch data from api
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${NEXT_PUBLIC_API_URL}/api/links?populate=*`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

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
