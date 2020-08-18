import React from 'react'
import './Styles.css'
import { Fichero } from './fichero'
import BoardConteiner from './BoardConteiner'

export const Board = () => {

    return (
        <div className="mesa">
            <div className="fichas">
                <Fichero />
            </div>
            <BoardConteiner />
        </div>
    )
}