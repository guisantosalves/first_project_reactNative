import React from "react";
import {View, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

//view -> flexContainer
//o que está dentro da view são os flexItems
export default (props) => {
    return(
        <View style={style.FlexV1}>
            <Quadrado cor='white'/>
            <Quadrado cor='#900'/>
            <Quadrado cor='#090'/>
            <Quadrado cor='#009'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: '#000'
    }
})