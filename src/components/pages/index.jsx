import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import { Start } from './start'
import { Board } from '../board/index'
import { Finish } from './finish'
import { Loading } from './loading'
import { Reset } from './reset'

export const ElJuego = () => {

    let { fichero } =useContext(GameContext)
    
    switch(fichero.memoTest) {
        case "Start":
            return <Start />
        
        case "Play":
            return <Board />
        
        case "Finish":
            return <Finish />

        case "Loading":
            return <Loading />
        
        case "Reset":
            return <Reset />
        
        default:
            return <Start />
    }
}