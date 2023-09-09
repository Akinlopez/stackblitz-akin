import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Message from './components/Message'
import Profile from './components/Profile'

function App() {
  
return (    
      <div className="App">
        <Hello/>
        <Message/>
        < Profile name: Olajide/>
        
      </div>        
    
  );
}

export default App
