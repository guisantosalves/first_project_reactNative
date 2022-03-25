import {Text, Button} from 'react-native';
import React, {useState} from 'react';
import Estilo from './estilo'

export default ({inicial = 0, passo = 1}) => {
    //let numero = props.inicial

    //useState vai retornar o que ela recebe de fato e retorna tmb a funcao que vai editar esse elemento
    const [numero, setNumero] = useState(inicial)

    const inc = () => {
        setNumero(numero + passo);
    }

    const dec = () => {
        setNumero(numero - passo)
    }

    return (
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </>
    )
}