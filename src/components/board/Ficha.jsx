import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import './Ficha.css'
import Flip from 'react-card-flip'

export const Ficha = ({ ficha }) => {
      
    const { hacerClick } = useContext(GameContext)
    const { id, figura, fueAdivinada, estaCliqueda } = ficha
    
    const handleClick = () => {
        hacerClick(id)
    }
    
    return(
        <div className="ficha">
            <Flip isFlipped={estaCliqueda} flipDirection="horizontal">
                <div>
                    <i
                    className={'frente fa fa-drupal fa-5x'}
                    onClick={handleClick}
                    />
                </div>
                <div>
                    <i
                    className={`${fueAdivinada ? 'adivinada' : 'figura'} fa ${figura} fa-4x`}
                    />
                </div>
            </Flip>
        </div>
    )
}