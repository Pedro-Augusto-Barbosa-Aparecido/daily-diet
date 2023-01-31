import { Plus } from "phosphor-react-native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";

import {
  Container,
  Icon,
  Percentage,
  PercentageContainer,
  Span,
  SubTitle,
} from "./styles";

import { useTheme } from "styled-components/native";
import { SectionList } from "react-native";
import { MealTitle } from "@components/Meal/styles";
import { Meal } from "@components/Meal";
import { ListEmpty } from "@components/ListEmpty";
import { LinearGradient } from "expo-linear-gradient";

export function Home() {
  const {
    COLORS: { WHITE, GRAY_500, RED_DARK, GRAY_700, GRAY_600 },
  } = useTheme();

  const DATA = [
    {
      title: "12.08.22",
      data: [
        { id: "kncal", text: "kbacla" },
        { id: "kncalca", text: "ascakbacla" },
        { id: "kncalcaasx", text: "ascakbacla" },
        { id: "kncalcasxaa", text: "ascakbacla" },
      ],
    },
    {
      title: "12.09.22",
      data: [
        { id: "bsfdkncal", text: "kbacla" },
        { id: "bsfdkncalca", text: "ascakbacla" },
        { id: "bsfdkncalcaasx", text: "ascakbacla" },
        { id: "bsfdkncalcasxaa", text: "ascakbacla" },
        { id: "bsfdkncalca1e21", text: "ascakbacla" },
        { id: "bsfdkncalca21", text: "ascakbacla" },
      ],
    },
  ];

  return (
    <Container>
      <Header />
      <PercentageContainer>
        <Percentage>90,86%</Percentage>
        <SubTitle>das refeições dentro da dieta</SubTitle>
        <Icon />
      </PercentageContainer>
      <Span>Refeições</Span>
      <Button
        title="Nova refeição"
        icon={<Plus color={WHITE} size={24} />}
        onPress={() => {}}
      />
      <LinearGradient
        style={{ flex: 1 }}
        colors={[WHITE, GRAY_700]}
        start={{ x: 0.5, y: 0.7 }}
        locations={[0.5, 1]}
      >
        <SectionList
          sections={DATA}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Meal prefix="20:00" text={item.text} isOutOfDiet />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <MealTitle>{title}</MealTitle>
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Parece que você não tem nenhuma refeicão cadastrada, faça o cadastro e comece a monitorar a sua dieta!!" />
          )}
        />
      </LinearGradient>
    </Container>
  );
}
