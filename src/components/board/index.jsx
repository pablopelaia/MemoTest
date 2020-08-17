import React, { useContext } from 'react'
import './Styles.css'
import { Fichero } from './Fichero'
import { GameContext } from '../../context/GameContext'

export const Tablero = () => {
    
    const { juego, reiniciaJuego } = useContext(GameContext)
    const verde = juego.jugadores[0].puntos
    const turnoColor = () => {
        if(juego.modo == 2 && juego.turno%2 === 0){
            return "orange"
        }
        return "green"
    }

    const renderNaranja = () => {
        if(juego.modo === 2){
            const naranja = juego.jugadores[1].puntos
            return (
                <div className="ply-naranja">
                    <button className="avatar naranja fa fa-drupal fa-4x" />
                    <h4 id="p2">{naranja}</h4>
                </div>
            )
        }
    }

    const renderTunro = () => {
        return <h2 className={`turno ${turnoColor()}`}>Turno <samp id="T">{juego.turno}</samp></h2>
    }

    const handleClick = () => {
        
        const res=window.confirm('Desea iniciar una nueva partida')
        
        if(res) {
            reiniciaJuego()
        }

        return
    }

    return (
        <div className="mesa">
            <div className="fichas">
                <Fichero />
            </div>
            <div className="elementos">
                {renderTunro()}
                <h1 className="fondo">MemoTest</h1>
                <div className="contador">
                    <div className="ply-verde">
                        <button className="avatar verde fa fa-drupal fa-4x" />
                        <h4 id="p1">{verde}</h4>
                    </div>
                    {renderNaranja()}
                </div>
                <button className="reiniciar fa fa-trash fa-3x" onClick={handleClick} />
            </div>
        </div>     
    )
}