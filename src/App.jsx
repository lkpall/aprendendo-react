import './App.css'
import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default (props) => (
    <div className="App">
        <h1>Monitor OLX</h1>

        <div className='Cards'>
            <Card titulo="#01 - Primeiro Componente" color="#2ab7ca">
                <Primeiro />
            </Card>

            <Card titulo="#02 - Componente Com Parametro" color="#fe4a49">
                <ComParametro titulo="Esse eh o titulo" subtitulo="Esse eh o subtitulo"></ComParametro>
            </Card>

            <Card titulo="#03 - Componente Com Filhos" color="#fed766">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Matheus</li>
                        <li>Bruno</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#04 - Componente Com Repeticao" color="#03396c">
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="#05 - Componente Com Condicional" color="#251e3e">
                <Condicional numero={2}></Condicional>
            </Card>

            <Card titulo="#06 - Condicional Com IF" color="#851e3e">
                <CondicionalComIf numero={15}></CondicionalComIf>
            </Card>

            <Card titulo="#07 - Comunicacao Direta" color="#3da4ab">
                <Pai sobrenome="Silva"></Pai>
            </Card>

            <Card titulo="#08 - Comunicacao Indireta" color="#83d0c9">
                <Super></Super>
            </Card>

            <Card titulo="#09 - Componente De Input" color="#fdf498">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Contador" color="#3385c6">
                <Contador passo={2} valor={1}></Contador>
            </Card>

            <Card titulo="#11 - Megasena" color="#d11141">
                <Mega qtdNumbers={6}></Mega>
            </Card>
        </div>
    </div>
);