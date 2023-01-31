import styled, { css } from "styled-components/native";

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
  `};

  text-align: left;
  margin-bottom: 16px;

  margin-top: 32px;
`;

export const MealContainer = styled.View`
  padding: 14px 16px 14px 12px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  margin-bottom: 8px;

  flex-direction: row;

  align-items: center;
`;

export const MealPrefix = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `};

  text-align: left;
`;

export const MealContent = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `};

  flex: 1;
`;

export type IndicatorBackgroundStyle = "PRIMARY" | "SECONDARY";
type IndicatorProps = {
  type: IndicatorBackgroundStyle;
};

export const MealIndicator = styled.View<IndicatorProps>`
  width: 16px;
  height: 16px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  border-radius: 99999px;
`;

export const MealSeparator = styled.View`
  min-height: 20px;
  max-height: 20px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

  margin: 0 12px;
`;
