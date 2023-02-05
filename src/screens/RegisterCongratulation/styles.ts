import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  justify-content: center;
  align-items: center;
`;

type TitleProps = {
  type?: "PRIMARY" | "SECONDARY";
};

export const Title = styled.Text<TitleProps>`
  ${({ theme, type = "PRIMARY" }) => css`
    font-size: ${theme.FONT_SIZE["2XL"]}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${type === "PRIMARY"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `};
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.regular};
    color: ${theme.COLORS.GRAY_100};
  `};
  text-align: center;
  margin-top: 8px;
`;

export const Bold = styled(SubTitle)`
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
`;

export const CongratulationImage = styled.Image`
  margin-top: 40px;
  margin-bottom: 32px;
`;
