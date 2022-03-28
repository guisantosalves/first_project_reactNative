import React from 'react';
import {Text, View} from 'react-native';
import Estilo from './estilo';

export default ({num = 0}) => {
  return (
    <View>
      <Text style={Estilo.txtG}>o resultado é: </Text>
      {num % 2 === 0
      ? <Text style={Estilo.txtG}>Par {num}</Text>
      : <Text style={Estilo.txtG}>Impar {num}</Text>
      }
      
    </View>
  );
};
