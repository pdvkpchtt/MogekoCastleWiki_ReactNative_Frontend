import { View } from "react-native";
import styled from "styled-components";
import { InfoTextMiddle } from "../Components/InfoTextMiddle";

const BackgrView = styled.View`
    flex: 1;
    background-color: #333333;
    padding: 20px;
`

export const AboutApp = () => {
    return(
        <BackgrView>
            <InfoTextMiddle 
                main='About this app' 
                sub={
                    '21 of February, 2023\n\nThis app was inspired by rpg game named "Mogeko Castle". I see it as a variation of WikiFandom app.\n\nThis is my absolutely first app made on ReactNative for my portfolio.\n\nI hope i`ve made not many mistakes and i know that my next apps will be greater!'
                }
            />
            <InfoTextMiddle 
                main='About me' 
                sub={
                    'name: Danil\n' + 
                    'age: 20 y.o.\n' + 
                    'status: student (3rd year university)'
                }
            />
        </BackgrView>
    )
}