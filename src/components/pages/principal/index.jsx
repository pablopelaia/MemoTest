import React, { useContext } from 'react'
import { GameContext } from '../../../context/GameContext'
import { Start } from '../start'
import { Tablero} from '../../tablero/mesa'
import { Ganaste } from '../end'
import { Loading } from '../loading'

export const ElJuego = () => {

    let { fichero } =useContext(GameContext)
    
    switch(fichero.memoTest) {
        case "Start":
            return <Start />
        
        case "Jugar":
            return <Tablero />
        
        case "Terminado":
            return <Ganaste />

        case "Cargando":
            return <Loading />
        
        default:
            return <Start />
    }
}