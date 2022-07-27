import React from "react";
import Filho from "./Filho";

export default props =>
    <div>
        <Filho {...props}>Vanilza</Filho>
        <Filho sobrenome={props.sobrenome}>Matheus</Filho>
        <Filho sobrenome="Praxedes">Marcio</Filho>
    </div>
