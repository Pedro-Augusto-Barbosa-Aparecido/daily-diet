import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  padding: 0 24px;
`;

export const PercentageContainer = styled.View`
  padding: 20px 16px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  border: 0;
  border-radius: 8px;

  position: relative;
  margin-top: 32px;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE["3XL"]}px;
    color: ${theme.COLORS.GRAY_100};
  `}

  text-align: center;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}

  text-align: center;
  margin-top: 2px;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
}))``;

export const ButtonIcon = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;

  position: absolute;

  top: 8px;
  right: 8px;
`;

export const Span = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `};

  margin-top: 40px;
  margin-bottom: 8px;
`;
