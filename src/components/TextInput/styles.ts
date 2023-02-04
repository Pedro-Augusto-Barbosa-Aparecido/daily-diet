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

export const Input = styled.TextInput`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.regular};
    color: ${theme.COLORS.GRAY_100};

    border: 1px solid ${theme.COLORS.GRAY_500};
  `};

  border-radius: 6px;

  height: 48px;

  padding: 14px;
  margin-top: 4px;

  width: 100%;
`;
