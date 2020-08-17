import React, { useContext } from 'react'
import './Styles.css'
import { Fichero } from './Fichero'
import { GameContext } from '../../context/GameContext'

export const Tablero = () => {
    
    const { juego, fichero, reiniciaJuego } = useContext(GameContext)
    const puntosVerde = fichero.puntaje[0]
    
    const turnoColor = () => {
        if(fichero.leTocaJugar === "N"){
            return "orange"
        }
        return "green"
    }

    const renderNaranja = () => {
        if(juego.modo === 2){
            const puntosNaranja =  fichero.puntaje[1]
            return (
                <div className="ply-naranja">
                    <button className="avatar naranja fa fa-drupal fa-4x" />
                    <h4 id="p2">{puntosNaranja}</h4>
                </div>
            )
        }
    }

    const handleClick = () => {
        const res = window.confirm('Desea iniciar una nueva partida')        
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
                <h2 className={`turno ${turnoColor()}`}>Turno <samp id="T">{fichero.turno}</samp></h2>
                <h1 className="fondo">MemoTest</h1>
                <div className="contador">
                    <div className="ply-verde">
                        <button className="avatar verde fa fa-drupal fa-4x" />
                        <h4 id="p1">{puntosVerde}</h4>
                    </div>
                    {renderNaranja()}
                </div>
                <button className="reiniciar fa fa-trash fa-3x" onClick={handleClick} />
            </div>
        </div>     
    )
}