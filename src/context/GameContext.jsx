import React, { useState } from 'react'
import mezclar from 'lodash.shuffle'
import { MiFiguras } from './images'

let GameContext = React.createContext()
let { Provider, Consumer } = GameContext


function GameProvider({ children }) {
    
    let [juego, setJuego] = useState({})
    let [fichero, setFichero] = useState({})
    
    function armaJuego() {
        const misFichas= armaFichero()
        fichero = {
            memoTest:"Start",
            cargar:"",
            fichas: misFichas,
            fichasSeleccionadas: [],
            puntaje: [0,0],
            leTocaJugar: "V",
            turno: 1,
            estaVerificando: false,
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
                estaCliqueda: false,
                esColor: ""
            }
            fichas.push(ficha)
            fichas.push({...ficha, id: number+1})
            number= number+2
        }
        return mezclar(fichas)
    }

    function iniciaJuego(click) { 
        juego = {
            ganador: "",
            modo: click            
        }
        setJuego(juego)
        
        const nuevoFichero = {
            ...fichero,
            memoTest:"Loading",
            cargar:"Play",
        }
        setFichero(nuevoFichero)
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
            const acierta = fichaUno.figura === fichaDos.figura
            
            let actualesFichas = actualFichero.fichas.map(f => {

                if (f.figura === fichaUno.figura || f.figura === fichaDos.figura){
                    if (acierta){
                        return {...f, fueAdivinada: true, esColor: fichero.leTocaJugar}
                    }
                    return {...f, estaCliqueda: false}
                }
                return f
            })
            
            let actualTurno = actualFichero.turno
            let actualJugador = actualFichero.leTocaJugar
            let actualPuntaje = actualFichero.puntaje

            if(acierta){
                let Verde = actualFichero.puntaje[0]
                let Naranja = actualFichero.puntaje[1]
                
                switch(actualFichero.leTocaJugar) {
                    case "V":
                        Verde = Verde + 1
                        break
                    case "N":
                        Naranja = Naranja + 1
                }
                actualPuntaje = [Verde, Naranja]

            }else{
                actualTurno = actualTurno + 1

                if(fichero.leTocaJugar === "V" && juego.modo === 2) {
                    actualJugador = "N"
                }else{
                    actualJugador = "V"
                }
            }

            let nuevoFichero= {
                ...actualFichero,
                fichas: actualesFichas,
                fichasSeleccionadas: [],
                puntaje: actualPuntaje,
                leTocaJugar: actualJugador,
                turno: actualTurno,
                estaVerificando: acierta,
            }
            
            setFichero(nuevoFichero)

            if (acierta){
                verificaFinaDelJuego(nuevoFichero);
            }
        }, 1500)
    }

    const verificaFinaDelJuego = (nuevoFichero) => {

        if (nuevoFichero.fichas.filter(f => !f.fueAdivinada).length === 0) {
            
            const elGanador = () => {
                let Verde = nuevoFichero.puntaje[0]
                let Naranja = nuevoFichero.puntaje[1]
                
                if(Verde > Naranja) {
                    return "V"
                }

                if(Verde === Naranja) {
                    if(nuevoFichero.leTocaJugar === "N") {
                        return "V"
                    }
                }
                return "N"
            }
            
            setTimeout(() => {
                const ficheroFinal= {
                    ...nuevoFichero,
                    memoTest:"Finish"
                }

                const nuevoJuego = {
                    ...juego,
                    ganador: elGanador()
                }                
                setFichero(ficheroFinal)
                setJuego(nuevoJuego)
            }, 2000);
        }
        nuevoFichero = {
            ...nuevoFichero,
            estaVerificando: false
        }
        setFichero(nuevoFichero)
    }

    function Ganador(){
        
        if(juego.ganador === "V") {
            return "gana-verde"
        }
        return "gana-naranja"
    }

    function TurnoColor() {

        if(fichero.leTocaJugar === "N"){
            return "orange"
        }
        return "green"
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
        <Provider value={{
            juego,
            fichero,
            armaJuego,
            iniciaJuego,
            reiniciaJuego,
            juegoFinalizado,
            cargarPagina,
            hacerClick,
            Ganador,
            TurnoColor
            }}>
            {children}
        </Provider>
    )
}

export { GameProvider, Consumer as GameConsumer, GameContext }