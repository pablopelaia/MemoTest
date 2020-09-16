import React, { Fragment, useContext } from 'react'
import { GameContext } from '../../context/GameContext'

export default function ElementsConteiner() {

    const { fichero, reiniciaJuego, TurnoColor } = useContext(GameContext)

    const handleClick = () => {
        const res = window.confirm('Desea iniciar una nueva partida')        
        if(res) {
            reiniciaJuego()
        }
        return
    }

    return (
        <Fragment>
            <h2 className={`turno ${TurnoColor()}`}>
                Turno <samp id="T">{fichero.turno}</samp>
            </h2>
            <h1 className="logo-tablero">MemoTest</h1>
            <button className="reiniciar fa fa-trash fa-3x" onClick={handleClick} />
        </Fragment>
    )
}