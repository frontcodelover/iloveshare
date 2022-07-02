import Head from "next/head";

import Component from "../components/login-btn";
import Login from "../components/login";
import React, { useState, useEffect } from "react";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  //write function to fetch data from api
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${NEXT_PUBLIC_API_URL}/api/links`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Login />
        {console.log(data)}
        {data?.map((item) => (
          <div className="grid grid-cols-2 row-auto">
          <div key={item.id} className="col-span-1 border p-9">
            <a href={item.attributes.url}>{item.attributes.name}</a>
          </div>
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
}
