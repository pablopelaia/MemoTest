import React from 'react'
import AvatarConteiner from './AvatarConteiner'
import ElementsConteiner from './ElementsConteiner'

export function BoardConteiner() {

    return (
        <div className="elementos">
            <ElementsConteiner />
            <AvatarConteiner />
        </div>
    )
}