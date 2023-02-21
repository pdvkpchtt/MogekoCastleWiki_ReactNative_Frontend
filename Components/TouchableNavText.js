import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components";

const TouchableView = styled.TouchableOpacity`
    background-color: #404040;
    padding: 10px;
    margin: 0 10px 10px 10px;
    border-radius: 10px;
`

const TouchableText = styled.Text`
    color: #fff;
    opacity: .5;
    text-align: center;
`

export const TouchableNavText = props => {
    return(
        <TouchableView onPress={props.func}>
            <TouchableText>
                {props.text}
            </TouchableText>
        </TouchableView>
    )
}
