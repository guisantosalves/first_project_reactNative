//quando é exportado por default ele nao precisa estar dentro de chaves
//quando é exportado sem o default, obrigatoriamente precisa estar dentro de chaves
import React from 'react';
import {Text, View} from 'react-native';
import Primeiro from './components/Primeiro';
import X, {Comp2, Comp3} from './components/Multi';

export default () => (
    <View>
        <X/>
        <Comp2/>
        <Comp3/>
        <Primeiro/>
    </View>
);

