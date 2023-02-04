import { ViewStyle, TextProps } from "react-native";

import { Container, Input, Label } from "./styles";

type Props = TextProps & {
  parentStyle?: ViewStyle;
  label?: string;
};

export function TextArea({ label, parentStyle, ...rest }: Props) {
  return (
    <Container {...parentStyle}>
      <Label>{label}</Label>
      <Input multiline textAlignVertical="top" {...rest} />
    </Container>
  );
}
