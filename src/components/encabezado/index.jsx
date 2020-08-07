import React, { useContext, useState } from 'react'
import './Styles.css'

export default function Encabezado() {
    
    // let { fichero, armaJuego } = useContext()
    // let intentos = fichero.intentos
    
    // const [miFichero, setMifichero] = useState(armaJuego())


    const handleClick = () => {
        const res=window.confirm('Desea iniciar una nueva partida')
        
        if(res){
            return alert('armaJuego()')
        }

        return
    }

    return (
        <header>
            <div className="titulo">
                MemoTest
            </div>
            <div>
                <button className="reiniciar" onClick={handleClick}>
                    Reiniciar
                </button>
            </div>
            <div className="subtitulo">
                Intentos: <span>0</span>
            </div>
    </header>
    )
}
