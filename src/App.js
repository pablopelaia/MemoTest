import React from 'react'
import './App.css'

import { GameProvider } from './context/GameContext'
import Start from './pages/main'

export default function App() {
  
  return (
    <div className="App">
      <GameProvider>
        <Start />
      </GameProvider>
    </div>
  )
}
