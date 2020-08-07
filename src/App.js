import React from 'react'
import './App.css'

import { GameProvider } from './context/GameContext'
import Start from './pages/main'
import ElJuego from './pages/principal'

export default function App() {
  
  return (
    <div className="App">
      <GameProvider>
        <ElJuego />
      </GameProvider>
    </div>
  )
}
