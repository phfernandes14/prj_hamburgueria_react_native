import react from "react";
import {View, Text} from 'react-native'

import { styles } from './styles';

import { Cabecalho } from "../components/Cabecalho";
import { Rodape } from "../components/Rodape";

export default function Produto(){
    return(
        <View style={styles.container}>
            <Cabecalho/>
            <Rodape titulo='Catupiry e Bacon'
                    detalheProduto = 'Pão Caseiro da casa, maionese caseira da casa'
            />
        </View>
    )
}