import React from 'react'
import './Styles.css'

export const Ficha = () => {
    
    // let figura = 'fa-beer'
    // let adivinada = false

    return(
        <div className="ficha">
            <div>
                <i className={'frente fa fa-drupal fa-5x'} />
            </div>
            {/* <div>
                <i className={`${adivinada ? 'adivinada' : 'figura'} fa ${figura} fa-4x`} />
            </div> */}
        </div>
    )
}

export default Ficha