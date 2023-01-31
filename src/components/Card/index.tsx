import React from "react";

import { ViewStyle } from "react-native";
import { Container, SubTitle, Title } from "./styles";

type Props = ViewStyle & {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
};

export function Card(props: Props) {
  return (
    <Container {...props}>
      <Title>{props.title}</Title>
      <SubTitle>{props.subtitle}</SubTitle>
      {props.icon && props.icon}
    </Container>
  );
}
