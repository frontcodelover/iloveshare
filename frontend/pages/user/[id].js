import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import Dashboard from "../../components/user/dashboard";


export default function GetUsersInfosByIdInParams() {
  const router = useRouter();
  const { id } = router.query;
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [provider, setProvider] = useState(null);



  
  console.log(id);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      }
      )
      .then(res => res.json())
      .then(res => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        console.log(res);
        setUsername(res.username);
        setEmail(res.email);
        setProvider(res.provider);
      }
      )
      .catch(err => {
        console.log(err);
      }
      );


  }, [id])
  

  return (
    <div><Dashboard username={username} email={email} provider={provider} /></div>
  )
}
