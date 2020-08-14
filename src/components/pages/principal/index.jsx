import React, { useContext } from 'react'
import { GameContext } from '../../../context/GameContext'
import { Start } from '../start'
import { Tablero} from '../../tablero/mesa'
import { Ganaste } from '../end'
import { Loading } from '../loading'
import { Reset } from '../reset'

export const ElJuego = () => {

    let { fichero } =useContext(GameContext)
    
    switch(fichero.memoTest) {
        case "Start":
            return <Start />
        
        case "Play":
            return <Tablero />
        
        case "Finish":
            return <Ganaste />

        case "Loading":
            return <Loading />
        
        case "Reset":
            return <Reset />
        
        default:
            return <Start />
    }
}