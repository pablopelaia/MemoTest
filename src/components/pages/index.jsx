import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import { Start } from './Start'
import { Tablero} from '../board/index'
import { Finish } from './Finish'
import { Loading } from './Loading'
import { Reset } from './Reset'

export const ElJuego = () => {

    let { fichero } =useContext(GameContext)
    
    switch(fichero.memoTest) {
        case "Start":
            return <Start />
        
        case "Play":
            return <Tablero />
        
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