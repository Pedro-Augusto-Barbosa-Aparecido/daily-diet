import { MotiView } from "moti";

import styled, { css } from "styled-components/native";

export const Container = styled(MotiView)`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_200};
  `};

  flex-direction: row;

  border-radius: 6px;
  padding: 16px 24px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.SM}px;

    color: ${theme.COLORS.WHITE};
  `};
`;

export const IconContainer = styled.View`
  margin-right: 16px;
`;
