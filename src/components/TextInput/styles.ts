import Animated from "react-native-reanimated";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 24px;

  width: 100%;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS.GRAY_200};
  `};
`;

type InputStyleProps = {
  isFocus?: boolean;
};

export const Input = styled.TextInput<InputStyleProps>`
  ${({ theme, isFocus = false }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.regular};
    color: ${theme.COLORS.GRAY_100};

    border: 1px solid ${isFocus ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_500};
  `};

  border-radius: 6px;

  height: 48px;

  padding: 14px;
  margin-top: 4px;

  width: 100%;
`;

export const ErrorContainer = styled(Animated.View)`
  flex-direction: row;

  align-items: center;
`;

export const Error = styled.Text`
  margin-top: 4px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.RED_DARK};
  `};
`;
