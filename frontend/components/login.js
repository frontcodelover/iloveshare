import React, { useEffect, useState } from "react";
import Router from 'next/router'


const backendUrl = process.env.NEXT_PUBLIC_API_URL;

const providersNames = ["google", "twitter", "auth0"];

const LoginButton = (props) => (
  <a href={`${backendUrl}/api/connect/${props.providerName}`}>
    <button>Connect to {props.providerName}</button>
  </a>
);




const LogoutButton = (props) => <button onClick={props.onClick}>Logout</button>;

const Login = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState(null);
  const [texts, setTexts] = useState("");
  const [dataJwt, setDataJwt] = useState("");
  const [logoutEffect, setLogoutEffect] = useState(false);
  const [idUser, setIdUser] = useState(null);

  useEffect(() => {


    fetch(`${backendUrl}/api/auth/google/callback/${location.search}`)
    .then(res => {
      if (res.status !== 200) {
        throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
      }
      return res;
    })
    .then(res => res.json())
    .then(res => {
      // Successfully logged with Strapi
      // Now saving the jwt to use it for future authenticated requests to Strapi
      localStorage.setItem('jwt', res.jwt);
      localStorage.setItem('username', res.user.username);
      setDataJwt(res.jwt);
      setUserName(res.user.username);
      setIsLogged(true);
      setIdUser(res.user.id);
      setTexts('You have been successfully logged in. ');
      console.log(res);
      
    })
    .catch(err => {
      console.log(err);
      setTexts('')
    });
    
  }, []);

  useEffect(() => {
    if (logoutEffect) {
    Router.push('/');
    setDataJwt(null);
    setUserName(null);
  }
}
, [logoutEffect, dataJwt, userName]);

const logout = (e) => {
  e.preventDefault();
  setIsLogged(false);
  setLogoutEffect(true);
  localStorage.removeItem(dataJwt);
  localStorage.removeItem(userName);
  };

  let buttons;

  if (isLogged) {
    buttons = <div className="bg-red-600 w-fit text-white p-2"><LogoutButton onClick={logout} /></div>;
  } else {
    buttons = (
      <ul style={{ listStyleType: "none" }}>
        {providersNames.map((providerName, i) => (
          <li key={providerName} className="border w-fit my-2">
            <LoginButton providerName={providerName} /> 
          </li>
        ))}
      </ul>
    );
  }

  let text;

  if (isLogged) {
    text = `Welcome ${userName}, you are connected! Your JWT is => ${dataJwt}. Your ID is => ${idUser}`;
  } else {
    text = `Please login to continue.`; 
  }

  const ButtonForDashBood = (props) => (
    <a href={`/user/${idUser}`}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Dashboard</button>
    </a>
  );

  return (
    <div>
      <p>{text}</p>
      {buttons}
      {texts}
      {(isLogged) ?  <ButtonForDashBood idUser={idUser} /> : null}
      
  
      
    </div>
  );
};

export default Login;
