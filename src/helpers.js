export const revisarPresupuesto = (prespuesto, restante) =>{
    let clase

    if ((prespuesto / 4 > restante)) {
        clase = 'alert alert-danger'
    } else if((prespuesto / 2) > restante) {
        clase = 'alert alert-warning'
    } else{
        clase= 'alert alert-success'
    }

    return clase
}