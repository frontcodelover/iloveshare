import React, { useState } from "react";
import authAPI from "../services/authAPI";

export default function loginpage() {
  const [credentials, setCredentials] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = ({ currentTarget }) => {
      const { value, name } = currentTarget
      setCredentials({
          ...credentials,
          [name]:value
      })
      
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
        await authAPI.authenticate(credentials)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="identifier"
        id="identifier"
        label="username"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        label="username"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
