import React from "react";
import { useAnimationState } from "moti";
import { Pressable, PressableProps } from "react-native";

import { Container, IconContainer, Title } from "./styles";

type Props = Omit<PressableProps, "onPressIn" | "onPressOut"> & {
  title: string;
  icon?: React.ReactNode;
};

export function Button({ title, icon, ...rest }: Props) {
  const buttonAnimated = useAnimationState({
    pressIn: {
      transform: [{ scale: 0.95 }],
    },
    pressOut: {
      transform: [{ scale: 1 }],
    },
  });

  function handlePressIn(animation: "pressIn" | "pressOut") {
    buttonAnimated.transitionTo(animation);
  }

  return (
    <Pressable
      onPressIn={() => handlePressIn("pressIn")}
      onPressOut={() => handlePressIn("pressOut")}
      {...rest}
    >
      <Container state={buttonAnimated}>
        {icon && <IconContainer>{icon}</IconContainer>}
        <Title>{title}</Title>
      </Container>
    </Pressable>
  );
}
