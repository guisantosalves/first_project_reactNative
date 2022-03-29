import React from "react";
import {View, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

//view -> flexContainer
//o que está dentro da view são os flexItems
export default (props) => {
    return(
        <View style={style.FlexV3}>
            <Quadrado cor='white'/>
            <Quadrado cor='#900'/>
            <Quadrado cor='#090'/>
            <Quadrado cor='#009'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        //flex-start começo
        //center no centro
        //flex-end no fim 
        //stretch ele faz a largura do msm tamanhao do conteiner flex
        // justifyContent: 'space-evenly',//eixo vertical
        // alignContent: 'flex-end',//eixo horizontal
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})