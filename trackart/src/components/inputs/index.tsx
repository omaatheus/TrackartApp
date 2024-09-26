import { TextInput, View } from "react-native";
import { Container, Input, Title } from "./styles";
import { TextInputProps } from "react-native";
type Props = TextInputProps & {
    item: string
}

export function Inputs({item, ...rest}: Props){
    return (
        <Container {...rest}>
            <Title>{item}</Title>
            <Input/>
        </Container>
    )
}