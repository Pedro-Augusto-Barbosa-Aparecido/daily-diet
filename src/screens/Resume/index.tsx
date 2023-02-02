import { Card } from "@components/Card";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { SlideInDown, SlideInUp } from "react-native-reanimated";
import { useTheme } from "styled-components/native";
import {
  ButtonBack,
  Container,
  Statistics,
  StatisticsRowContainer,
  StatiticsTitle,
  SubTitle,
  Title,
  TopBar,
} from "./styles";

export function Resume() {
  const { navigate } = useNavigation();
  const { COLORS: colors } = useTheme();

  return (
    <Container>
      <TopBar entering={SlideInUp.delay(100).duration(700)}>
        <TouchableOpacity
          style={{ width: 30 }}
          onPress={() => navigate("home")}
        >
          <ButtonBack />
        </TouchableOpacity>
        <Title>90,8%</Title>
        <SubTitle>das refeições dentro da dieta</SubTitle>
      </TopBar>
      <Statistics entering={SlideInDown.delay(100).duration(700)}>
        <StatiticsTitle>Estatísticas gerais</StatiticsTitle>
        <Card
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
          style={{
            backgroundColor: colors.GRAY_600,
            marginTop: 24,
          }}
        />
        <Card
          title="109"
          subtitle="refeições registradas"
          style={{
            backgroundColor: colors.GRAY_600,
            marginTop: 12,
          }}
        />
        <StatisticsRowContainer>
          <Card
            title="99"
            subtitle="refeições dentro da dieta"
            style={{
              backgroundColor: colors.GRAY_600,
              flex: 1,
              marginRight: 6,
              marginTop: 12,
            }}
          />
          <Card
            title="10"
            subtitle="refeições fora da dieta"
            style={{
              backgroundColor: colors.GRAY_600,
              flex: 1,
              marginLeft: 6,
              marginTop: 12,
            }}
          />
        </StatisticsRowContainer>
      </Statistics>
    </Container>
  );
}
