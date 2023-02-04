import { Button } from "@components/Button";
import { NavigationHeader } from "@components/Header";
import { TextArea } from "@components/TextArea";
import { TextInput } from "@components/TextInput";
import { useAnimationState } from "moti";

import { View } from "react-native";

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

export function NewMeal() {
  const buttonAnimatedYes = useAnimationState({
    pressIn: {
      transform: [{ scale: 0.7 }],
    },
    pressOut: {
      transform: [{ scale: 1 }],
    },
  });

  const buttonAnimatedNo = useAnimationState({
    pressIn: {
      transform: [{ scale: 0.7 }],
    },
    pressOut: {
      transform: [{ scale: 1 }],
    },
  });

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
        <TextInput label="Nome" />

        <TextArea label="Descrição" />

        <DateTimerContainer>
          <TextInput
            label="Data"
            parentStyle={{
              flex: 1,
            }}
          />
          <TextInput
            label="Hora"
            parentStyle={{
              flex: 1,
              marginLeft: 20,
            }}
          />
        </DateTimerContainer>
        <ToggleContainer>
          <Label>Está dentro da dieta?</Label>
          <View style={{ flexDirection: "row", flex: 1, marginTop: 8 }}>
            <ToggleButton
              onPressIn={() => handlePressInYes("pressIn")}
              onPressOut={() => handlePressInYes("pressOut")}
            >
              <ToggleButtonContainer state={buttonAnimatedYes}>
                <Circle />
                <Label>Sim</Label>
              </ToggleButtonContainer>
            </ToggleButton>
            <ToggleButton
              style={{ marginLeft: 8 }}
              onPressIn={() => handlePressInNo("pressIn")}
              onPressOut={() => handlePressInNo("pressOut")}
            >
              <ToggleButtonContainer state={buttonAnimatedNo}>
                <Circle type="SECONDARY" />
                <Label>Não</Label>
              </ToggleButtonContainer>
            </ToggleButton>
          </View>
        </ToggleContainer>
        <Button
          title="Cadastrar Refeição"
          style={{
            marginTop: 128,
          }}
        />
      </Form>
    </Container>
  );
}
