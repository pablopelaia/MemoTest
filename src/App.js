import React from 'react'
import './App.css'

import { GameProvider } from './context/GameContext'
import ElJuego from './components/pages/principal'

export default function App() {
  
  return (
    <div className="App">
      <GameProvider>
        <ElJuego />
      </GameProvider>
    </div>
  )
}
