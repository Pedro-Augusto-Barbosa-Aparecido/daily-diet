import { Card } from "@components/Card";
import { NavigationHeader } from "@components/Header";
import { DietContext } from "@context/DietContext";
import { useContext } from "react";
import { SlideInDown, SlideInUp } from "react-native-reanimated";
import { useTheme } from "styled-components/native";
import {
  Container,
  Statistics,
  StatisticsRowContainer,
  StatiticsTitle,
  SubTitle,
  Title,
  TopBar,
} from "./styles";

export function Resume() {
  const { COLORS: colors } = useTheme();

  const { isOutOfDiet, progressInDiet } = useContext(DietContext);

  return (
    <Container outOfDiet={isOutOfDiet}>
      <TopBar entering={SlideInUp.delay(100).duration(700)}>
        <NavigationHeader />
        <Title>{progressInDiet}%</Title>
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
              backgroundColor: colors.GREEN_LIGHT,
              flex: 1,
              marginRight: 6,
              marginTop: 12,
            }}
          />
          <Card
            title="10"
            subtitle="refeições fora da dieta"
            style={{
              backgroundColor: colors.RED_LIGTH,
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
