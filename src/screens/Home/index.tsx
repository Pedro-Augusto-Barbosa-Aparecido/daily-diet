import { Plus } from "phosphor-react-native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";

import { ButtonIcon, Container, Icon, Span } from "./styles";

import { useTheme } from "styled-components/native";
import { SectionList, Alert } from "react-native";
import { MealTitle } from "@components/Meal/styles";
import { Meal } from "@components/Meal";
import { ListEmpty } from "@components/ListEmpty";
import { Card } from "@components/Card";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { useCallback, useState } from "react";
import { getMeals } from "@storage/meal/getMeals";
import { getPercentageInDiet } from "@storage/meal/getPercentageInDiet";

interface IMeal {
  id: string;
  name: string;
  description: string;
  isInDiet: boolean;
  date: string;
  hour: string;
}

interface MealList {
  title: string;
  data: IMeal[];
}

export function Home() {
  const { COLORS: colors } = useTheme();
  const { navigate } = useNavigation();

  const [meals, setMeals] = useState<MealList[] | null>();
  const [progressInDiet, setProgressInDiet] = useState<number>(0);

  async function fetchMeals() {
    try {
      const storage = await getMeals();
      const percentage = (await getPercentageInDiet()) ?? 0;

      setProgressInDiet(percentage);

      setMeals(
        storage.map((meal) => ({
          title: meal.date,
          data: meal.meals,
        }))
      );
    } catch (error) {
      Alert.alert(
        "Busca das Refeições",
        "Houve um erro ao tentar buscar as refeições, por favor reinicie o aplicativo"
      );
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  const isOutOfDiet = progressInDiet <= 60;

  return (
    <Container>
      <Header />
      <Card
        title={`${progressInDiet}%`}
        subtitle="das refeições dentro da dieta"
        icon={
          <ButtonIcon onPress={() => navigate("resume")} activeOpacity={0.8}>
            <Icon />
          </ButtonIcon>
        }
        style={{
          backgroundColor: isOutOfDiet ? colors.RED_LIGTH : colors.GREEN_LIGHT,
        }}
      />
      <Span>Refeições</Span>
      <Button
        title="Nova refeição"
        icon={<Plus color={colors.WHITE} size={24} />}
        onPress={() => navigate("newMeal")}
      />

      <SectionList
        sections={meals ?? []}
        contentContainerStyle={{
          paddingBottom: 100,
          // flex: 1,
        }}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Meal prefix="20:00" text={item.name} isOutOfDiet={!item.isInDiet} />
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
