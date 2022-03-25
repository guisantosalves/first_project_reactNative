import React from "react";
import {View, Text} from "react-native";
import estilo from "./estilo";
import Estilo from "./estilo";

export default (props) =>{
    return(
        //usando fragment
        <>
            <Text style={Estilo.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </>
    )
}