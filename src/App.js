import React from 'react'
import './App.css'

import { GameProvider } from './context/GameContext'
import { ElJuego } from './components/pages'

export default function App() {
  
  return (
    <div className="conteiner">
      <GameProvider>
        <ElJuego />
      </GameProvider>
    </div>
  )
}