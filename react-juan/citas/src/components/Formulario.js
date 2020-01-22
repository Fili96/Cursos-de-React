import React, { Fragment, useState } from 'react'
import uuid from 'uuid/v4'

const Formulario = ({crearCita}) => {


    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, actualizarError] = useState(false)

    const { mascota, fecha, propietario, hora, sintomas } = cita

    // Funcion que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario presiona agregar cita
    const submitCita = (e) => {
        e.preventDefault()
        
        // Validar
        if ( mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === "") {
            actualizarError(true)
            return;
        }
        // eliminar mensaje de errores
        actualizarError(false)
        
        // Asignar un id
        cita.id = uuid()
        
        // Crear la cita
        crearCita(cita)

        // Reiniciar el formulario
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (
        <Fragment>

            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> :null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    value={mascota}
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                />
                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    value={propietario}
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la mascota"
                    onChange={actualizarState}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    value={fecha}
                    className="u-full-width"
                    onChange={actualizarState}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    value={hora}
                    className="u-full-width"
                    onChange={actualizarState}
                />
                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    value={sintomas}
                    className="u-full-width"
                    onChange={actualizarState}
                />

                <button 
                    type="submit"
                    className="u-full-width button-primary"
                >
                Agregar Cita
                </button>
            </form>
        </Fragment>
    )
}

export default Formulario;