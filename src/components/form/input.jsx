import React, { useState } from "react";

export default props => {

    let [nome, setNome] = useState("Digite aqui")

    return (
        <>
            <h3>{nome}</h3>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)}></input>
        </>
    )
}
