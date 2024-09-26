import { Container, Input, Title } from "./styles";
import { TextInputProps } from "react-native";
type Props = TextInputProps & {
    item: string
}

export function Inputs({item, ...rest}: Props){
    return (
        <Container >
            <Title>{item}</Title>
            <Input {...rest}/>
        </Container>
    )
}