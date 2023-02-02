import React from "react";

import { ViewStyle } from "react-native";
import { Container, SubTitle, Title } from "./styles";

type Props = {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  style: ViewStyle;
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
