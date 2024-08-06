import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import envs from './conf/conf'
function App() {
  console.log(envs.appwriteUrl)
  return (
    
    <>
      <h1>A blog with apwrite</h1>
    </>
  )
}

export default App
