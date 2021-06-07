import React, { Fragment, useState } from 'react'
import Error from './Error'

const Pregunta = ({ guardarPresupuesto, guardarRestante }) => {

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

export default Pregunta
