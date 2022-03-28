import React, {useState} from "react";
import {View, Text, TextInput} from 'react-native';
import Estilo from './estilo';

export default (props) => {
    const [nome, setNome] = useState('Teste')

    //quando altera o texto aciona uma ação que é o setNome()
    return(
        <View>
            <Text>{nome}</Text>
            <TextInput 
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}