import React from "react";
import { Button } from "react-native";

type Botao = {
    titulo: string;
    onPress: () => void;
}

const Botao :React.FC<Botao>=({titulo, onPress})=>{
    return (
        <Button onPress={onPress} title={titulo} color="#000055"></Button>
    );
}

export default Botao;