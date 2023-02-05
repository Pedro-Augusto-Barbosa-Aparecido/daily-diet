import { Button } from "@components/Button";
import { NavigationHeader } from "@components/Header";
import { TextInput } from "@components/TextInput";
import { formatDateString } from "@utils/formatDateString";
import { formatHourString } from "@utils/formatHourString";
import { useAnimationState } from "moti";

import dayjs from "dayjs";

import { useState } from "react";

import { Alert, View } from "react-native";

import { SlideInDown, SlideInUp } from "react-native-reanimated";
import {
  Circle,
  Container,
  DateTimerContainer,
  Form,
  Label,
  ToggleButton,
  ToggleButtonContainer,
  ToggleContainer,
  TopBar,
} from "./styles";
import { registerNewMeal } from "@storage/meal/registerNewMeal";
import { useNavigation } from "@react-navigation/native";

export function NewMeal() {
  const today = dayjs();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>(
    `${today.get("day")}/${today.get("month")}/${today.get("year")}`
  );
  const [hour, setHour] = useState<string>(
    `${today.get("hour")}:${today.get("minute")}`
  );
  const [isInDiet, setIsInDiet] = useState<"yes" | "no" | null>(null);

  const { navigate } = useNavigation();

  const buttonAnimatedYes = useAnimationState({
    pressIn: {
      transform: [{ scale: 0.8 }],
    },
    pressOut: {
      transform: [{ scale: 1 }],
    },
  });

  const buttonAnimatedNo = useAnimationState({
    pressIn: {
      transform: [{ scale: 0.8 }],
    },
    pressOut: {
      transform: [{ scale: 1 }],
    },
  });

  async function handleCreateNewMeal() {
    if (name.trim().length === 0) {
      return Alert.alert(
        "Nova Refeição",
        "Insira o nome do prato que você comeu"
      );
    }

    if (date.length === 0 || date.length < 10) {
      return Alert.alert("Nova Refeição", "Insira a data que você comeu");
    }

    if (hour.length === 0 || hour.length < 5) {
      return Alert.alert("Nova Refeição", "Insira o horário que você comeu");
    }

    if (!isInDiet) {
      return Alert.alert(
        "Criação",
        "Selecione se a refeição está dentro da dieta"
      );
    }

    try {
      setIsSubmitting(true);

      const mealDate = dayjs(date);

      if (!mealDate.isValid()) {
        return Alert.alert("Nova Refeição", "Data inválida!");
      }

      if (mealDate.isBefore(dayjs(new Date()).startOf("date"))) {
        return Alert.alert(
          "Nova Refeição",
          "Data inválida! Colouqe a data de hoje"
        );
      }

      const [hours, minutes] = hour.split(":").map(parseInt);

      if (hours > 23 || minutes > 59) {
        return Alert.alert("Nova refeição", "Horário inválido");
      }

      await registerNewMeal({
        name,
        date,
        isInDiet: isInDiet === "yes",
        description,
        hour,
      });

      navigate("registerCongratulation", { inDiet: isInDiet === "yes" });
    } catch (err) {
      Alert.alert("Criação", "Não foi possível criar a refeição!");
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handlePressInYes(animation: "pressIn" | "pressOut") {
    buttonAnimatedYes.transitionTo(animation);
  }

  function handlePressInNo(animation: "pressIn" | "pressOut") {
    buttonAnimatedNo.transitionTo(animation);
  }

  return (
    <Container>
      <TopBar entering={SlideInUp.delay(50).duration(700)}>
        <NavigationHeader showTitle title="Nova refeição" />
      </TopBar>
      <Form entering={SlideInDown.delay(50).duration(700)}>
        <TextInput
          label="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Nome do prato..."
          keyboardAppearance="dark"
        />

        <TextInput
          label="Descrição"
          multiline
          textAlignVertical="top"
          style={{ height: 120 }}
          value={description}
          onChangeText={(text) => setDescription(text)}
          placeholder="Descrição da refeição..."
          keyboardAppearance="dark"
        />

        <DateTimerContainer>
          <TextInput
            label="Data"
            parentStyle={{
              flex: 1,
            }}
            value={date}
            onChangeText={(text) => setDate(formatDateString(text))}
            maxLength={10}
            keyboardType="decimal-pad"
            placeholder="MM/DD/AAAA"
            keyboardAppearance="dark"
          />

          <TextInput
            label="Hora"
            parentStyle={{
              flex: 1,
              marginLeft: 20,
            }}
            value={hour}
            onChangeText={(text) => setHour(formatHourString(text))}
            keyboardType="decimal-pad"
            maxLength={5}
            placeholder="HH:MM"
            keyboardAppearance="dark"
          />
        </DateTimerContainer>
        <ToggleContainer>
          <Label>Está dentro da dieta?</Label>
          <View style={{ flexDirection: "row", flex: 1, marginTop: 8 }}>
            <ToggleButton
              onPressIn={() => handlePressInYes("pressIn")}
              onPressOut={() => handlePressInYes("pressOut")}
              onPress={() => setIsInDiet("yes")}
            >
              <ToggleButtonContainer
                active={isInDiet === "yes"}
                state={buttonAnimatedYes}
              >
                <Circle />
                <Label>Sim</Label>
              </ToggleButtonContainer>
            </ToggleButton>
            <ToggleButton
              style={{ marginLeft: 8 }}
              onPress={() => setIsInDiet("no")}
              onPressIn={() => handlePressInNo("pressIn")}
              onPressOut={() => handlePressInNo("pressOut")}
            >
              <ToggleButtonContainer
                state={buttonAnimatedNo}
                active={isInDiet === "no"}
                type="SECONDARY"
              >
                <Circle type="SECONDARY" />
                <Label>Não</Label>
              </ToggleButtonContainer>
            </ToggleButton>
          </View>
        </ToggleContainer>
        <Button
          disabled={isSubmitting}
          isLoading={isSubmitting}
          title="Cadastrar Refeição"
          style={{ flex: 1, marginTop: 250 }}
          onPress={handleCreateNewMeal}
        />
      </Form>
    </Container>
  );
}
