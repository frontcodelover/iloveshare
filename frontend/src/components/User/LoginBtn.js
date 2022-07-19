import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const backendUrl = process.env.REACT_APP_API_URL;

const providersNames = [
  'google',
  'auth0',
];

const LoginButton = (props) => 
    <button style={{ width: '150px' }}><a href={`${backendUrl}/api/connect/${props.providerName}`}>Connect to {props.providerName} </a></button>
 ;

const LogoutButton = (props) => <button onClick={props.onClick}>Logout</button>;

const LoginBtn = (props) => {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('jwt'));

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('jwt');
    localStorage.removeItem('username');
    setIsLogged(false);
  };

  let buttons;

  if (isLogged) {
    buttons = <LogoutButton onClick={logout} />;
  } else {
    buttons = <ul style={{ listStyleType: 'none' }}>
      {providersNames.map((providerName, i) => <li key={providerName}>
        <LoginButton providerName={providerName}/>
        </li>)}
    </ul>;
  }

  let text;

  if (isLogged) {
    text = `Welcome ${localStorage.getItem('username')}, you are connected!`;
  } else {
    text = 'You are not connected. Please log in.';
  }

  return <div>
    <p>{text}</p>
      {buttons}
      
  </div>;
}

export default LoginBtn;