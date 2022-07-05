import React, {useState} from 'react'
import getConfig from 'next/config'
import { parseCookies } from 'nookies'

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function addBoard() {
  const [boardName, setBoardName] = useState('')
  const [boardDescription, setBoardDescription] = useState('')
  
//! comprendre pourquoi je n'arrive pas à récuperer le JWT

      const jwt = parseCookies()['jwt']
      console.log(jwt)

  async function handleSubmit() {

    const boardInfo = {
      data: {
        title: boardName,
        description: boardDescription,
      }
    }

    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/boards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
        'Accept' : 'application/json'
      },
      body: JSON.stringify(boardInfo)
    })
    
    const addResponse = await response.json()
    
    console.log(addResponse)
  }

  return (
    <div>
      Add board

      <from>
        <input type="text" onChange={e => setBoardName(e.target.value)} placeholder="name" />
        <input type="text" onChange={e => setBoardDescription(e.target.value)} placeholder="url" />
        <button type="submit" onClick={handleSubmit}>Add</button>
      </from>

    </div>
  )
}
