import React, { Fragment, useContext } from 'react'
import './Styles.css'
import { GameContext } from '../../context/GameContext'

export const Loading = () => {
    
    let { cargarPagina } = useContext(GameContext)
    
    const handleClick = () => {        
        setTimeout(() => {
            cargarPagina()
        }, 1000);
    }

    return (
        <Fragment>
            <h1 className="subtitle loading">
                L O A D I N G <span className="updating"> .   .   .</span>
            </h1>
            <h1 className="title load">MemoTest</h1>
            <a className="icon fa fa-drupal fa-5x" onClick={handleClick()}/>                
        </Fragment>
    )
}