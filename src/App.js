//quando é exportado por default ele nao precisa estar dentro de chaves
//quando é exportado sem o default, obrigatoriamente precisa estar dentro de chaves
// import Primeiro from './components/Primeiro';
// import CompPadrao, {Comp2, Comp3} from './components/Multi';
// import MiniMax from './components/MiniMax';
// import Aleatorio from './components/Aleatorio';
// import Botao from './components/Botao';
// import Titulo from './components/Titulo';
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai'

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Pai from './components/indireta/Pai';
import Filho from './components/indireta/Filho';

export default () => (
    <View style={style.App}>
        <Pai />
        {/* <MiniMax min={3} max={20}/>
        <Contador inicial={100} passo={13} />
        <Contador />
        <Botao />
        <Titulo principal="Cadastro" secundario="Tela de cadastro do produto"/>
        <MiniMax min={2} max={21}/> 
        <Aleatorio min={1} max={20}/>
        <Aleatorio min={1} max={15}/>
        <Aleatorio min={1} max={50}/>
        <CompPadrao/>
        <Comp2/>
        <Comp3/>
        <Primeiro/> */}
    </View>
);

const style = StyleSheet.create({
    App:{
        flexGrow: 1, //o tanto que o componente pode crescer
        justifyContent: "center", //eixo principal (eixo vertical)
        alignItems: "center", //eixo secundário (eixo horizontal)
        padding: 20,
    } 
})
