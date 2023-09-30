/* src/App.js */
import React from 'react'
import {  Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ProfileCard from './ui-components/ProfileCard';

function App ({signOut,user}) { 

  return (
    <Authenticator socialProviders={["amazon","facebook","google"]} >
    {({ signOut, user }) => (
      <main>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
        <ProfileCard/>
      </main>
    )}
  </Authenticator>
  )
}



export default App;