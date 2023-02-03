import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;

  justify-content: space-between;
  /* align-items: center; */

  padding-top: 64px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 9999px;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const NavigationHeaderContainer = styled.View`
  flex-direction: row;
  /* flex: 1; */
  /* align-items: center; */
  /* justify-content: center; */
  /* text-align: center; */

  position: relative;
`;

export const ButtonBack = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
}))`
  /* flex: 1; */
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
  `}

  /* flex: 2; */
  text-align: center;
  /* background-color: red; */
  width: 83%;
`;
