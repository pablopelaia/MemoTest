import React, { Fragment } from 'react'
import { Start } from '../start'
import { Tablero} from '../../tablero/mesa'

export default function ElJuego() {
    return (
        <Fragment>
            <Start />
            <Tablero />
        </Fragment>
    )
}