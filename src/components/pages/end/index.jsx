import React, { useContext, Fragment } from 'react'
import { GameContext } from '../../../context/GameContext'
import './Styles.css'
import { Loading } from '../loading'


export const Ganaste = () => {
    
    let { juegoFinalizado } = useContext(GameContext)
    
    const handleClick = () => {
        setTimeout(() => {
            juegoFinalizado()
            return <Loading />
        }, 500);
    }

    return (
        <Fragment>
            <h1 className="ganar">
                ¡¡¡ Feliciataciones Ganaste en <samp className="intentos">30</samp> intentos !!!
            </h1>
            <h1 className="memo-fin">
                MemoTest
            </h1>
            <button onClick={handleClick()}  className="jugar">
                Nuevo juego
            </button>            
        </Fragment>
    )
}