import React from 'react'
import './Styles.css'
import Ficha from '../ficha'

export const Fichero = () => {
    
    let fichero = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]    
    return (
        <div className="juego">
            {fichero.map((ficha, index) => (
                <Ficha />
            ))}
        </div>
    )
}