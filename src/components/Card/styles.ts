import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 20px 16px;

  border: 0;
  border-radius: 8px;

  position: relative;
  margin-top: 32px;
`;

export const Title = styled.Text`
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
