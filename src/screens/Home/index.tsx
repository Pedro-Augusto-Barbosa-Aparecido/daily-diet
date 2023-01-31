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

export function Home() {
  const {
    COLORS: { WHITE },
  } = useTheme();

  const DATA = [
    // {
    //   title: "12.08.22",
    //   data: [
    //     { id: "kncal", text: "kbacla" },
    //     { id: "kncalca", text: "ascakbacla" },
    //     { id: "kncalcaasx", text: "ascakbacla" },
    //     { id: "kncalcasxaa", text: "ascakbacla" },
    //   ],
    // },
    // {
    //   title: "12.09.22",
    //   data: [
    //     { id: "bsfdkncal", text: "kbacla" },
    //     { id: "bsfdkncalca", text: "ascakbacla" },
    //     { id: "bsfdkncalcaasx", text: "ascakbacla" },
    //     { id: "bsfdkncalcasxaa", text: "ascakbacla" },
    //     { id: "bsfdkncalca1e21", text: "ascakbacla" },
    //     { id: "bsfdkncalca21", text: "ascakbacla" },
    //   ],
    // },
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

      <SectionList
        sections={DATA}
        contentContainerStyle={{
          paddingBottom: 100,
          flex: 1,
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
    </Container>
  );
}
