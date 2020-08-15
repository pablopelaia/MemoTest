import React, { useContext } from 'react'
import './Fichero.css'
import { Ficha } from './Ficha'
import { GameContext } from '../../context/GameContext'

export const Fichero = () => {
    
    let { fichero } = useContext(GameContext)

    return (
        <div className="juego">
            {fichero.fichas.map((ficha) => (
                <Ficha
                key={ficha.id}
                ficha={ficha}
                />
            ))}
        </div>
    )
}