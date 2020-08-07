import React, { Fragment } from 'react'
import Encabezado from '../../components/encabezado'
import { Fichero } from '../../components/Tablero/Fichero'
import Start from '../main'
export default function ElJuego() {
    return (
        <Fragment>
            <Start />
            <Encabezado />
            <Fichero />
        </Fragment>
    )
}