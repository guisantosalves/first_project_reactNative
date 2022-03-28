import React from 'react';
import {Text, FlatList} from 'react-native';
import Estilo from '../estilo';
import produtos from './produtos';

//Sempre colocar key em lists
export default props => {
  const produtoRender = ({item: p})=>{
    return (
        <Text>
          {p.id}) {p.nome} - {p.preco}
        </Text>
      );
  }

    return (
    <>
      <Text style={Estilo.txtG}>Lista de produtos V2</Text>
      <FlatList
        data={produtos}
        keyExtractor={i => i.id}
        renderItem={produtoRender}
      />
    </>
  );
};
