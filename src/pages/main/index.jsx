import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import '../../App.css'


export default function Start() {
    
    let { armaJuego } = useContext(GameContext)

    return (
        <div>
            <h1 className="inicio">
                MemoTest
            </h1>
            <button onClick={armaJuego}  className="Start fa-beer fa-2x">
                Start
            </button>   
        </div>
    )
}