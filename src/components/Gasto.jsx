import React from 'react'

const Gasto = ({ gasto }) => (
    <li className="gastos">
        <p>
            {gasto.nombregasto}
            <span className="gasto">$ {gasto.cantidadgasto}</span>
        </p>
    </li>
)


export default Gasto
