import React from "react";
import {Text} from 'react-native';
import estilo from './estilo';

function Comp(){
    return <Text style={estilo.txtG}>Comp oficial</Text>
}

function Comp2(){
    return <Text style={estilo.txtG}>Comp02</Text>
}

function Comp3(){
    return <Text style={estilo.txtG}>Comp03</Text>
}

export {Comp2, Comp3};
export default Comp;