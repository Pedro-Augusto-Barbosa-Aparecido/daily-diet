import { ArrowLeft } from "phosphor-react-native";
import Animated from "react-native-reanimated";

import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  flex: 1;

  justify-content: space-between;
`;

export const TopBar = styled(Animated.View)`
  padding: 24px;
  padding-top: 48px;
  padding-bottom: 34px;
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

export const ButtonBack = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
}))``;

export const Statistics = styled(Animated.View)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 32px 24px 0;
`;

export const StatiticsTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `};

  text-align: center;
`;

export const StatisticsRowContainer = styled.View`
  flex-direction: row;
`;
