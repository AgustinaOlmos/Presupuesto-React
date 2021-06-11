import React from 'react'
import Gasto from './Gasto'
import PropTypes from 'prop-types'

const Listado = ({ gastos, eliminarGasto }) => (
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {gastos.map(gasto => (
        <Gasto
            key={gasto.id}
            gasto={gasto}
            eliminarGasto={eliminarGasto}
        />
        ))}
    </div>
)

Listado.propTypes = {
    gastos: PropTypes.array.isRequired,
    eliminarGasto: PropTypes.func.isRequired
}

export default Listado
