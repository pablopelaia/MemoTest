import React from 'react'
import './Styles.css'
import Flip from 'react-card-flip'
import { GameContext } from '../../../context/GameContext'
import { useContext } from 'react'
import { useState } from 'react'

export const Ficha = ({ ficha }) => {
      
    const { figura, fueAdivinada, estaCliqueda } = ficha
    const [click, setClick] = useState(estaCliqueda)

    const handleClick = () => setClick(!click)
    
    return(
        <div className="ficha">
            <Flip isFlipped={click} flipDirection="horizontal">
                <div>
                    <i
                    className={'frente fa fa-drupal fa-5x'}
                    onClick={handleClick}
                    />
                </div>
                <div>
                    <i
                    className={`${fueAdivinada ? 'adivinada' : 'figura'} fa ${figura} fa-4x`}
                    onClick={handleClick}
                    />
                </div>
            </Flip>
        </div>
    )
}