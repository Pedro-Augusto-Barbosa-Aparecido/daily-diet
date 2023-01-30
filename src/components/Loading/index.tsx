import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

export function Loading() {
  const {
    COLORS: { GREEN_DARK },
  } = useTheme();

  return (
    <Container>
      <ActivityIndicator color={GREEN_DARK} size={32} />
    </Container>
  );
}
