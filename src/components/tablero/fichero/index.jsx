import React, { useContext } from 'react'
import './Styles.css'
import { Ficha } from '../ficha'
import { GameContext } from '../../../context/GameContext'

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