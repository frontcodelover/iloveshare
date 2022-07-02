import React, { useEffect, useState } from "react";

const backendUrl = process.env.NEXT_PUBLIC_API_URL;

const providersNames = ["github", "google", "twitter", "auth0"];

const LoginButton = (props) => (
  <a href={`${backendUrl}/api/connect/${props.providerName}`}>
    <button style={{ width: "150px" }}>Connect to {props.providerName}</button>
  </a>
);

const LogoutButton = (props) => <button onClick={props.onClick}>Logout</button>;

const Login = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState(null);
  const [dataJwt, setDataJwt] = useState("");

  useEffect(() => {
    let data = !localStorage.getItem("jwt");
    console.log(localStorage);
    if (!data) {
      setIsLogged(false);
    } else {
      setDataJwt(localStorage.getItem("jwt"));
      setUserName(localStorage.getItem("username"));
      setIsLogged(true);
    }
  }, []);

  const logout = (e) => {
    e.preventDefault();
    setDataJwt(localStorage.removeItem("jwt"));
    setUserName(localStorage.removeItem("username"));
    setIsLogged(false);
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
    text = `Welcome ${userName}, you are connected!`;
  } else {
    text = `You are not connected. Please log in. `;
  }

  return (
    <div>
      <p>{text}</p>
      {buttons}
    </div>
  );
};

export default Login;
