import React from "react";
import { useAnimationState } from "moti";
import { Pressable, PressableProps, ActivityIndicator } from "react-native";

import { Container, IconContainer, Title } from "./styles";
import { useTheme } from "styled-components/native";

type Props = Omit<PressableProps, "onPressIn" | "onPressOut"> & {
  title: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
};

export function Button({
  title,
  icon,
  isLoading = false,
  disabled = false,
  ...rest
}: Props) {
  const { COLORS: colors } = useTheme();

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
      disabled={disabled}
      {...rest}
    >
      <Container disabled={disabled} state={buttonAnimated}>
        {isLoading ? (
          <ActivityIndicator size={20} color={colors.GRAY_600} />
        ) : (
          <>
            {icon && <IconContainer>{icon}</IconContainer>}
            <Title>{title}</Title>
          </>
        )}
      </Container>
    </Pressable>
  );
}
