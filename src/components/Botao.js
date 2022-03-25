import React from 'react';
import { Button, StyleSheet } from 'react-native';


export default (props) => {

    function executar(){
        console.warn('Exec 1')
    }

    return(
        <>
            <Button color="#f194ff" title="Exectar 1!" onPress={executar}/>
            <Button title="Exectar 2!" onPress={function(){
                console.warn("exec 2")
            }}/>
            <Button color="#4D3A7E" title="Exectar 3!" onPress={() => {
                console.warn("exec 3")
            }}/>
        </>
        //passar ela como referência, pois se passar ela executando vai dar erro, pois 
        //será lida na hora que o código do componente for executado
        //onPress é a função executada quando o botão for clicado
    )
}

// const style = StyleSheet.create({
//     botao: {
//         marginBottom: 5,
//         padding: 10
//     }
// })