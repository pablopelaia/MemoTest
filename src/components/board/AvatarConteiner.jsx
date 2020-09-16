import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'

export default function AvatarConteiner() {

    const { juego, fichero } = useContext(GameContext)    
    const puntosVerde = fichero.puntaje[0]

    const renderNaranja = () => {
        if(juego.modo === 2){
            const puntosNaranja =  fichero.puntaje[1]
            return (
                <div className="ply-naranja">
                    <button className="avatar naranja fa fa-user fa-4x" />
                    <h4 id="p2">{puntosNaranja}</h4>
                </div>
            )
        }
    }

    return (
        <div className="contador">
            <div className="ply-verde">
                    <button className="avatar verde fa fa-user fa-4x" />
                    <h4 id="p1">{puntosVerde}</h4>
            </div>
            {renderNaranja()}
        </div>
    )
}
