import React, { useEffect, useState } from "react";
import LoginRedirect from "./LoginRedirect";
import LoginBtn from "./LoginBtn";
import { useParams } from "react-router-dom";


export default function Dashboard() {
  const backendUrl = process.env.REACT_APP_API_URL;
  const [dataRes, setDataRes] = useState('{}');
  const params = useParams();
  let tab = [];
  useEffect(() => {
    fetch(`${backendUrl}/api/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => setDataRes(data))
      .catch((err) => console.log(err));
  }, [params.id]);

tab.push(dataRes);
 
  console.log(tab);

  return (
    <div>
      {tab.map((user) => {
        return (
          <div>
            <h1>{user.username}</h1>
            <p>{user.email}</p>
            <p>{user.place}</p>
            <p>{user.age} ans</p>
            <p>{user.pseudo}</p>
            <p>{user.bio}</p>
          </div>
        );
      }
      )}
      <LoginRedirect />
      <LoginBtn />
    </div>
  );
}
