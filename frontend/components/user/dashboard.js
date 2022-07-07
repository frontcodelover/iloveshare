import React from 'react'

export default function Dashboard({email, provider, username}) {

  return (
    <div>

      {username}
      {email}
      {provider}
    </div>
  )
}
