import React from "react";
import {View, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

//view -> flexContainer
//o que está dentro da view são os flexItems
export default (props) => {
    return(
        <View style={style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V0: {
        backgroundColor: '#7A918D',
        height: 300,
    },
    V1: {
        backgroundColor: '#DCEED1',
        flexGrow: 1
    },
    V2: {
        backgroundColor: '#A18276',
        flexGrow: 1
    }
})