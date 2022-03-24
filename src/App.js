//quando é exportado por default ele nao precisa estar dentro de chaves
//quando é exportado sem o default, obrigatoriamente precisa estar dentro de chaves
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Primeiro from './components/Primeiro';
import CompPadrao, {Comp2, Comp3} from './components/Multi';

export default () => (
    <View style={style.App}>
        <CompPadrao/>
        <Comp2/>
        <Comp3/>
        <Primeiro/>
    </View>
);

const style = StyleSheet.create({
    App:{
        flexGrow: 1, //o tanto que o componente pode crescer
        justifyContent: "center", //eixo principal (eixo vertical)
        alignItems: "center", //eixo secundário (eixo horizontal)
    } 
})
