import React, { Fragment, useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'


const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    // Definir el state
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    // Submit para determianr el prespuesto
    const agregarPresupuesto = e => {
        e.preventDefault()

        // Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true)
            return
        }
        // Si pasa la validacion
        guardarError(false)
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarPregunta(false)
    }

    return (
        <Fragment>
            <h2>Coloca Tu Presupuesto</h2>

            {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>

        </Fragment>
    )
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired

}

export default Pregunta
