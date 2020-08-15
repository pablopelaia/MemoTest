import React, { useState } from 'react'
import mezclar from 'lodash.shuffle'
import { MiFiguras } from './images'

let GameContext = React.createContext()
let { Provider, Consumer } = GameContext


function GameProvider({ children }) {
    
    let [fichero, setFichero] = useState({})
   
    function armaJuego() {
        const misFichas= armaFichero()
        fichero = {
            memoTest:"Loading",
            cargar:"Play",
            fichas: misFichas,
            fichasSeleccionadas: [],
            intentos: 0
        }
        setFichero(fichero)
    }


    function armaFichero(){

        const NUMERO_DE_FICHAS = 40
        let fichas = []
        const MIS_FIGURAS = MiFiguras()
        let number=1

        while (fichas.length < NUMERO_DE_FICHAS) {
            const i = Math.floor(Math.random() * MIS_FIGURAS.length)
            const ficha = {
                id: number,
                figura: MIS_FIGURAS.splice(i, 1)[0],
                fueAdivinada: false,
                estaCliqueda: false
            }
            fichas.push(ficha)
            fichas.push({...ficha, id: number+1})
            number= number+2
        }
        return mezclar(fichas)
    }


    function hacerClick(fichaID) {
        
        let miFicha = fichero.fichas.filter(f => f.id === fichaID)[0]

        if (miFicha.fueAdivinada || miFicha.estaCliqueda) {
            return
        }

        miFicha = {...miFicha, estaCliqueda: true}
        const actualSeleccionadas = [...fichero.fichasSeleccionadas, miFicha]

        const actualesFichas = fichero.fichas.map(f => {
            if(f.id === fichaID){
                return miFicha
            }
            return f
        })
        
        const actualFichero = {
            ...fichero,
            fichas: actualesFichas,
            fichasSeleccionadas: actualSeleccionadas
        }

        setFichero(actualFichero)

        if (actualSeleccionadas.length === 2) {
            compararSeleccionadas(actualFichero)
        }
    }


    const compararSeleccionadas = (actualFichero) => {
        
        setTimeout(() => {            
            
            const [fichaUno, fichaDos] = actualFichero.fichasSeleccionadas
                
            let actualesFichas = actualFichero.fichas.map(f => {

                if (f.figura === fichaUno.figura || f.figura === fichaDos.figura){
                    if (fichaUno.figura === fichaDos.figura){
                        return {...f, fueAdivinada: true}
                    }
                    return {...f, estaCliqueda: false}
                }
                return f
            })
            
            let nuevoFichero= {
                ...actualFichero,
                fichas: actualesFichas,
                fichasSeleccionadas: [],
                intentos: actualFichero.intentos + 1
            }
            
            setFichero(nuevoFichero)

            if (fichaUno.figura === fichaDos.figura){
                verificaFinaDelJuego(nuevoFichero);
            }

        }, 1500)
    }

    const verificaFinaDelJuego = (nuevoFichero) => {
        if (nuevoFichero.fichas.filter(f => !f.fueAdivinada).length === 0) {
            setTimeout(() => {
                let ficheroFinal= {
                    ...nuevoFichero,
                    memoTest:"Finish"
                }
                setFichero(ficheroFinal)
            }, 2500);
        }
    }

    function reiniciaJuego() {
        const resetFichero = {
            ...fichero,
            memoTest:"Reset"
        }
        setFichero(resetFichero)
    }

    function juegoFinalizado() {
        const finPartida = {
            ...fichero,
            memoTest:"Cargando",
            cargar:"Start"
        }
        setFichero(finPartida)
    }

    function cargarPagina(){
        const miRender = {
            ...fichero,
            memoTest: fichero.cargar
        }
        setFichero(miRender)
    }

    return (
        <Provider value={{fichero, armaJuego, reiniciaJuego, juegoFinalizado, cargarPagina, hacerClick}}>
            {children}
        </Provider>
    )
}

export { GameProvider, Consumer as GameConsumer, GameContext }