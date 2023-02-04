import { MotiView } from "moti";

import styled, { css } from "styled-components/native";

type ButtonStyleProps = {
  disabled?: boolean | null;
};

export const Container = styled(MotiView)<ButtonStyleProps>`
  ${({ theme, disabled = false }) => css`
    background-color: ${disabled
      ? theme.COLORS.GRAY_200
      : theme.COLORS.GRAY_100};
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
