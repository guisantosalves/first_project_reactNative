import React from "react";
import Estilo from "./estilo";
import {Text} from "react-native";

export default (props) =>{
    const delta = props.max - props.min + 1
    const aleatorio = parseInt(Math.random() * delta) + props.min
    return (
        <Text style={Estilo.txtG}>O valor min é: {props.min}, o valor máximo é: {props.max}, o número aleatório entre eles é: {aleatorio}</Text>
    )
}