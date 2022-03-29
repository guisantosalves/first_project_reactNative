//quando é exportado por default ele nao precisa estar dentro de chaves
//quando é exportado sem o default, obrigatoriamente precisa estar dentro de chaves
// import Primeiro from './components/Primeiro';
// import CompPadrao, {Comp2, Comp3} from './components/Multi';
// import MiniMax from './components/MiniMax';
// import Aleatorio from './components/Aleatorio';
// import Botao from './components/Botao';
// import Titulo from './components/Titulo';
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai'
// import Pai from './components/indireta/Pai';
// import Filho from './components/indireta/Filho';
// import ContadorV2 from './components/contador/ContadorV2';
// import Diferenciar from './components/Diferenciar';
// import ParImpar from './components/ParImpar';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import UsuarioLogado from './components/UsuarioLogado';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import FlexboxV1 from './components/layout/FlexboxV1';
// import FlexboxV2 from './components/layout/FlexboxV2';
// import FlexboxV3 from './components/layout/FlexboxV3';
// import FlexboxV4 from './components/layout/FlexboxV4';

import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Mega from './components/mega/Mega';


export default () => (
    <SafeAreaView style={style.App}>
        
        <Mega qtdNumeros={12} />
        

        {
        /*
        <FlexboxV4/>
        <FlexboxV3/>
        <FlexboxV2/>
        <FlexboxV1/> 
        <DigiteSeuNome />
        <MiniMax min={3} max={20}/>
        <ListaProdutosV2/>
        <ListaProdutos />
        <UsuarioLogado usuario={{nome:'gui', email:'gui@gui.com'}}/>
        <UsuarioLogado usuario={{nome:'gui'}}/>
        <UsuarioLogado usuario={{nome:'carlos', email: 'carlitos@ass.com'}}/>
        <Familia>
            <Membro nome="joao" sobrenome="silva"/>
            <Membro nome="junior" sobrenome="silva"/>
        </Familia>
        <Familia>
            <Membro nome="aaaaa" sobrenome="bbbbb"/>
            <Membro nome="ccccc" sobrenome="ddddd"/>
        </Familia>
        <ParImpar num={3}/>
        <Diferenciar />
        <ContadorV2/>
        <Pai />
        <Contador inicial={100} passo={13} />
        <Contador />
        <Botao />
        <Titulo principal="Cadastro" secundario="Tela de cadastro do produto"/>
        <MiniMax min={2} max={21}/>
        <Aleatorio min={1} max={20}/>
        <Aleatorio min={1} max={15}/>
        <Aleatorio min={1} max={50}/>
        <CompPadrao/>
        <Comp2/>
        <Comp3/>
        <Primeiro/> */}
    </SafeAreaView>
);

const style = StyleSheet.create({
    App:{
        flexGrow: 1, //o tanto que o componente pode crescer
        justifyContent: "center", //eixo principal (eixo vertical)
        alignItems: "center", //eixo secundário (eixo horizontal)
        padding: 20,
    }
})
