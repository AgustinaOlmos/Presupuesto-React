import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {

  // Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])
  const [gasto, guardarGasto] = useState([])
  const [creargasto, guardarCrearGasto] = useState(false)

  // useEffect que actualiza el restante
  useEffect(() => {
    if (creargasto) {

      // Agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ])

      // Resta del prespuesto actual
      const presupuestoRestante = restante - gasto.cantidadgasto
      guardarRestante(presupuestoRestante)

      // Resetear a false
      guardarCrearGasto(false)
    }
  }, [gasto, creargasto, gastos, restante])


  // Eliminar gastos por ID
  const eliminarGasto = gastoEliminado => {
    // Eliminar
    const gastosAll = gastos.filter(gasto => gasto.id !== gastoEliminado.id)
    guardarGastos(gastosAll)

    //Actualizar el Restante
    const actualizarRestante = restante + gastoEliminado.cantidadgasto
    guardarRestante(actualizarRestante)
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto Mensual</h1>

        <div className="contenido-principal contenido">

          {/*Carga Condicional de Componentes */}
          {mostrarpregunta ?
            (
              <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>

                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                    eliminarGasto={eliminarGasto}
                  />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
