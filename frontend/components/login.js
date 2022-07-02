import React, { useEffect, useState } from 'react';


const backendUrl = process.env.NEXT_PUBLIC_API_URL;

const providersNames = [
    'discord',
    'facebook',
    'github',
    'google',
    'instagram',
    'linkedin',
    'reddit',
    'twitch',
    'twitter',
    'vk',
    'auth0',
];



const LoginButton = (props) => <a href={`${backendUrl}/api/connect/${props.providerName}`}>
    <button style={{ width: '150px' }}>Connect to {props.providerName}</button>
  </a>;

const LogoutButton = (props) => <button onClick={props.onClick}>Logout</button>;

const Login = (props) => { 

    const [isLogged, setIsLogged] = useState(false)
    const [dataName, setDataName] = useState("coucou")
    const [userName, setUserName] = useState(null)
    const [dataJwt, setDataJwt] = useState("")
    
    useEffect(() => {
        let data = !localStorage.getItem('jwt')
        console.log(localStorage)
        if (!data) {
            setDataJwt(localStorage.removeItem('jwt'))
            setIsLogged(false)
            
        } else {
            setDataJwt(localStorage.getItem('jwt'))
            setDataName("Coucou")
            setUserName(localStorage.getItem('name'))
            setIsLogged(true)
        }

    }, [])
    
    

      
        const logout = (e) => {
            e.preventDefault();

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
      
          text = `Welcome ${userName}, you are connected!`;
   
    } else {
        text = `You are not connected. Please log in. `;
    }
    
    
    
    return <div>
    <p>{text}</p>
    {buttons}
  </div>;
}

export default Login;