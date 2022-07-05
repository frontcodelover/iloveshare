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
    <div>
      <Head>
        <title>I Love Share</title>
        <meta name="description" content="Sauvegardez et partagez vos meilleurs liens" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Login />
        {console.log(data)}
        {data?.map((item) => (
          <div className="grid grid-cols-2 row-auto">
            <div key={item.id} className="col-span-1 border p-9">
              <a href={item.attributes.url}>{item.attributes.name}</a>
              <p>{item.attributes.url}</p>
              <div className="flex">
              {/* <p className="bg-gray-200 w-fit py-1 px-5 rounded-lg mx-2">#{item.attributes.tags.data[0]?.attributes.tags}</p>
              <p className="bg-gray-200 w-fit py-1 px-5 rounded-lg mx-2">#{item.attributes.tags.data[1]?.attributes.tags}</p>
              <p className="bg-gray-200 w-fit py-1 px-5 rounded-lg mx-2">#{item.attributes.tags.data[2]?.attributes.tags}</p> */}
              </div>
              {/* {console.log(
                "tags",
                item.attributes.tags.data[0]?.attributes.tags
              )} */}
            </div>
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
}
