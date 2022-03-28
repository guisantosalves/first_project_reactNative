import React from "react";
import {View, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

//view -> flexContainer
//o que está dentro da view são os flexItems
export default (props) => {
    return(
        <View style={style.FlexV2}>
            <Quadrado cor='white'/>
            <Quadrado cor='#900'/>
            <Quadrado cor='#090'/>
            <Quadrado cor='#009'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        //flex-start começo
        //center no centro
        //flex-end no fim 
        //stretch ele faz a largura do msm tamanhao do conteiner flex
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: "flex-start",
        backgroundColor: '#000'
    }
})