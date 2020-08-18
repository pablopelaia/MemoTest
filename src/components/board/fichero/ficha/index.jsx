import React, { useContext } from 'react'
import { GameContext } from '../../../../context/GameContext'
import './Styles.css'
import Flip from 'react-card-flip'

export const Ficha = ({ ficha }) => {
      
    const { hacerClick } = useContext(GameContext)
    const { id, figura, fueAdivinada, estaCliqueda } = ficha
    
    const handleClick = () => {
        hacerClick(id)
    }

    const fichaFlipped = () => {
        if(fueAdivinada){
            if(ficha.esColor === "V"){
                return `player1 fa ${figura} fa-4x`
            }
            return `player2 fa ${figura} fa-4x`
        }
        return `figura fa ${figura} fa-4x`
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
                    className={fichaFlipped()}
                    />
                </div>
            </Flip>
        </div>
    )
}