import React, { useState } from 'react'
import Error from './Error'

import PropTypes from 'prop-types'

const shortid = require('shortid')

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombregasto, guardarNombre] = useState('')
    const [cantidadgasto, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    // Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault()

        // validar
        if (nombregasto.trim() === '' || cantidadgasto < 1 || isNaN(cantidadgasto)) {
            guardarError(true)
            return
        }
        guardarError(false)

        // construir el gasto
        const gasto = {
            nombregasto,
            cantidadgasto,
            id: shortid.generate()
        }

        // pasar el gasto al componente principal
        guardarGasto(gasto)
        guardarCrearGasto(true)

        // resetear el form
        guardarNombre('')
        guardarCantidad (0)
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega Tus Gastos</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Invalido" /> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombregasto}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidadgasto}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>

            <input
                type="submit"
                value="Agregar Gasto"
                className="button-primary u-full-width"
            />
        </form>
    )
}

Formulario.propTypes = {
    guardarGasto : PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
export default Formulario
