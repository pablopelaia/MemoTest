import React from 'react'
import './Styles.css'
import { GameContext } from '../../../context/GameContext'
import { useContext } from 'react'

export const Ficha = ({ ficha }) => {
      
    const { figura, fueAdivinada, estaCliqueda } = ficha

    return(
        <div className="ficha">
            {/* <div>
                <i className={'frente fa fa-drupal fa-5x'} />
            </div> */}
            <div>
                <i className={`${fueAdivinada ? 'adivinada' : 'figura'} fa ${figura} fa-4x`} />
            </div>
        </div>
    )
}

export default Ficha