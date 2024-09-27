import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;

    top: 62%;
    left: 55%;

    height: 70px;
    width: 160px;

    background-color: #2F80ED;

    border-radius: 10px;
    border-width: 1px;
    border-color: #fff;

`; 

export const Title = styled.Text`
    color: #fff;

    font-size: 25px;

`;

export const ViewButton = styled.View`
    height: 20%;
    width: 100%;
`;