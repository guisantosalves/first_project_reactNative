import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';
import If from './If';

export default (props)=>{
    const usuario = props.usuario || {}
    //null -> null
    //!!null -> false
    //!null -> true
    //!![] -> true
    //!!{} -> true
    return(
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.txtG}>
                    Usuário logado:
                </Text>
                <Text style={Estilo.txtG}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}