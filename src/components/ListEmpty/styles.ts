import { Placeholder } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_300};
  `};

  text-align: center;
`;

export const Icon = styled(Placeholder).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_600,
  size: 96,
}))`
  margin-top: 32px;
`;
