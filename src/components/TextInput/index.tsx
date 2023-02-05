import { useState } from "react";

import { TextInputProps, ViewStyle } from "react-native";
import { BounceIn, FadeOut } from "react-native-reanimated";
import { Container, Error, ErrorContainer, Input, Label } from "./styles";

type Props = TextInputProps & {
  label?: string;
  parentStyle?: ViewStyle;
  error?: string;
};

export function TextInput({ label, parentStyle, error, ...rest }: Props) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <Container {...parentStyle}>
      <Label>{label}</Label>
      <Input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        isFocus={isFocus}
        {...rest}
      />
      {!!error && (
        <ErrorContainer entering={BounceIn} exiting={FadeOut}>
          <Error>{error}</Error>
        </ErrorContainer>
      )}
    </Container>
  );
}
