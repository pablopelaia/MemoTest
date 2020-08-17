import React, { useState } from 'react'
import mezclar from 'lodash.shuffle'
import { MiFiguras } from './images'

let GameContext = React.createContext()
let { Provider, Consumer } = GameContext


function GameProvider({ children }) {
    
    let [fichero, setFichero] = useState({})
    let [juego, setJuego] = useState({})

    function iniciaJuego(click) {
        const losParticipantes = seleccionaModo(click)
        const elModo = losParticipantes.length
        
        juego = {
            modo: elModo,
            turno: 1,
            jugadores: losParticipantes,
            ganador: losParticipantes[0].id
        }
        setJuego(juego)
        armaJuego()
    }

    function seleccionaModo(click) {
        let participantes =[]
        const verde = {
            id: 1,
            puntos: 0,
        }
        participantes.push(verde)
        if(click === 2) {
            const naranja = {
                id: 2,
            puntos: 0,
            }
            participantes.push(naranja)
        }
        return participantes
    }
       
    function armaJuego() {
        const misFichas= armaFichero()
        fichero = {
            memoTest:"Loading",
            cargar:"Play",
            fichas: misFichas,
            fichasSeleccionadas: [],
            intentos: 0,
            estaVerificando: false
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

        if (fichero.estaVerificando || miFicha.estaCliqueda) {
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

        const verifica = actualSeleccionadas.length === 2

        const actualFichero = {
            ...fichero,
            fichas: actualesFichas,
            fichasSeleccionadas: actualSeleccionadas,
            estaVerificando: verifica
        }

        setFichero(actualFichero)

        if (verifica) {
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
                intentos: actualFichero.intentos + 1,
                estaVerificando: false
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
            memoTest:"Reset",
            cargar:"Start"
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
        <Provider value={{juego, fichero, iniciaJuego, reiniciaJuego, juegoFinalizado, cargarPagina, hacerClick}}>
            {children}
        </Provider>
    )
}

export { GameProvider, Consumer as GameConsumer, GameContext }