import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, IconContainer, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon?: React.ReactNode;
};

export function Button({ title, icon, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      {icon && <IconContainer>{icon}</IconContainer>}
      <Title>{title}</Title>
    </Container>
  );
}
