import React, { Fragment, useContext } from 'react'
import './Styles.css'
import { GameContext } from '../../../context/GameContext'
import { Start } from '../start'
import { Tablero } from '../../tablero/mesa'
import { Ganaste } from '../end'


export const Loading = () => {
    
    let { fichero } = useContext(GameContext)
    const carga = () => {
        
        setTimeout(() => {
            switch(fichero.memoTest) {
                case "Start":
                    return <Start />
                
                case "Jugar":
                    return <Tablero />
                
                case "Terminado":
                    return <Ganaste />
                
                default:
                    return <Start />
            }
        }, 1000);
    }

    return (
        <Fragment>
            <h1 className="loading">
                L O A D I N G <span className="aguarde"> .   .   .</span>
            </h1>
            <h1 className="memo-lod">MemoTest</h1>
            <a className="cargando fa fa-drupal fa-5x" onClick={carga()}/>                
        </Fragment>
    )
}