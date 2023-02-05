import { Card } from "@components/Card";
import { NavigationHeader } from "@components/Header";
import { useFocusEffect } from "@react-navigation/native";
import { getPercentageInDiet } from "@storage/meal/getPercentageInDiet";
import { getResumeOfDiet as getResume } from "@storage/meal/getResumeOfDiet";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
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

interface IResume {
  bestSequency: number;
  numberOfMealRegistred: number;
  mealsInDiet: number;
  mealsOutDiet: number;
}

export function Resume() {
  const { COLORS: colors } = useTheme();
  const [progressInDiet, setProgressInDiet] = useState<number>(0);
  const [resume, setResume] = useState<IResume | null>(null);

  async function getResumeOfDiets() {
    try {
      const percentage = (await getPercentageInDiet()) ?? 0;
      const resumeOfDiet = await getResume();

      setResume(resumeOfDiet);
      setProgressInDiet(percentage);
    } catch (error) {
      Alert.alert("Resumo", "Houve um erro ao tentar buscar o resumo da dieta");
    }
  }

  const isOutOfDiet = progressInDiet <= 60;

  useFocusEffect(
    useCallback(() => {
      getResumeOfDiets();
    }, [])
  );

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
          title={String(resume?.bestSequency ?? "0")}
          subtitle="melhor sequência de pratos dentro da dieta"
          style={{
            backgroundColor: colors.GRAY_600,
            marginTop: 24,
          }}
        />
        <Card
          title={String(resume?.numberOfMealRegistred ?? "0")}
          subtitle="refeições registradas"
          style={{
            backgroundColor: colors.GRAY_600,
            marginTop: 12,
          }}
        />
        <StatisticsRowContainer>
          <Card
            title={String(resume?.mealsInDiet ?? "0")}
            subtitle="refeições dentro da dieta"
            style={{
              backgroundColor: colors.GREEN_LIGHT,
              flex: 1,
              marginRight: 6,
              marginTop: 12,
            }}
          />
          <Card
            title={String(resume?.mealsOutDiet ?? "0")}
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
