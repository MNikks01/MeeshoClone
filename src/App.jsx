import React, { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import { useSelector } from 'react-redux'

function App() {

  // selector is used to extract data from the redux store
  const userId = useSelector(state => state.auth.userId)

  // to handle user logeed in/logged out state
  useState(() => {
    // setloggedInUser('dmfvksdksduy97w9rrkjv')
  }, [])

  return (
    <div>
      {
        userId ? <Homepage /> : <Login />
      }
    </div>
  )
}

export default App