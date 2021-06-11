import React from 'react'
import PropTypes from 'prop-types'

const Gasto = ({ gasto, eliminarGasto }) => (
    <li className="gastos">
        <p>
            {gasto.nombregasto}
            
            <span className="gasto">$ {gasto.cantidadgasto}</span>
            <button
                onClick={() => eliminarGasto(gasto)}
                className="button button-primary" 
            >X</button>
        </p>
    </li>
)

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired,
    eliminarGasto: PropTypes.func.isRequired
}
export default Gasto
