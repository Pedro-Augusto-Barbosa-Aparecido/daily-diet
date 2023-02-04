import { MotiView } from "moti";
import Animated from "react-native-reanimated";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  flex: 1;
`;

export const TopBar = styled(Animated.View)`
  padding: 40px 24px 24px;
`;

export const Form = styled(Animated.ScrollView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 32px 24px 100px;
`;

export const DateTimerContainer = styled.View`
  flex-direction: row;

  width: 100%;
`;

export const ToggleContainer = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS.GRAY_200};
  `};
`;

export const ToggleButton = styled.Pressable`
  flex: 1;

  flex-direction: row;

  height: 50px;

  justify-content: center;
  align-items: center;
`;

type ToggleButtonProps = {
  active?: boolean;
  type?: "PRIMARY" | "SECONDARY";
};

export const ToggleButtonContainer = styled(MotiView)<ToggleButtonProps>`
  flex: 1;

  flex-direction: row;

  ${({ theme, active = false, type = "PRIMARY" }) => css`
    background-color: ${active
      ? type === "PRIMARY"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGTH
      : theme.COLORS.GRAY_600};
    border: 1px solid
      ${active
        ? type === "PRIMARY"
          ? theme.COLORS.GREEN_DARK
          : theme.COLORS.RED_DARK
        : "transparent"};
  `};

  border-radius: 6px;

  height: 50px;

  justify-content: center;
  align-items: center;
`;

type CircleProps = {
  type?: "PRIMARY" | "SECONDARY";
};

export const Circle = styled.View<CircleProps>`
  background-color: ${({ theme, type = "PRIMARY" }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

  width: 8px;
  height: 8px;

  border-radius: 9999px;

  margin-right: 8px;
`;
