import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 64px 24px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 9999px;

  border: 2px solid ${({ theme }) => theme.COLORS.GARY_200};
`;
