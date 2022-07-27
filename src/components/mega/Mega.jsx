import React, { useState } from "react";

export default props => {

    let [numbers, setNumbers] = useState(Array(props.qtdNumbers).fill(0))

    function gerarNumerosNaoContidos(array) {
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumero) ? gerarNumerosNaoContidos(array) : novoNumero
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdNumbers)
            .fill(0)
            .reduce(a => [...a, gerarNumerosNaoContidos(a)], [])
            .sort((a, b) => a - b)
        setNumbers(novoArray)
    }

    return (
        <>
           <h3>Mega</h3>
           <h4>{numbers.join(' ')}</h4>
           <button onClick={gerarNumeros}>Gerar Numeros</button>
        </>
    )
}
