import React, { Fragment } from 'react'
import { Start } from '../start'
import { Tablero} from '../../tablero/mesa'
import { Ganaste } from '../end'

export default function ElJuego() {
    return (
        <Fragment>
            {/* <Start /> */}
            {/* <Tablero /> */}
            <Ganaste />
        </Fragment>
    )
}