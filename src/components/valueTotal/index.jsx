

export function ValueTotal({name}){
    return(
        <div className="containerValueTotal">
           <div className="box1">
            <h3>Valor total:</h3>
            <span>$ {name}</span>

            </div>
            <p>O valor se refere ao saldo</p>
        </div>
    )
}