import { TextInputProps, ViewStyle } from "react-native";
import { Container, Input, Label } from "./styles";

type Props = TextInputProps & {
  label?: string;
  parentStyle?: ViewStyle;
};

export function TextInput({ label, parentStyle, ...rest }: Props) {
  return (
    <Container {...parentStyle}>
      <Label>{label}</Label>
      <Input {...rest} />
    </Container>
  );
}
