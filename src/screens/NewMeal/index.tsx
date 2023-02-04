import { Button } from "@components/Button";
import { NavigationHeader } from "@components/Header";
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

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";

const newMealSchema = zod.object({
  name: zod
    .string({ required_error: "Insira o nome da refeição!" })
    .trim()
    .min(1, { message: "Insira um nome válido!" }),
  description: zod.string().nullable(),
  dateWithoutHour: zod
    .string({
      required_error: "Insira a data que você comeu essa refeição",
    })
    .trim()
    .min(1, { message: "Insira a data que você comeu essa refeição válido!" }),
  hour: zod.string({
    required_error: "Insira a hora que você comeu essa refeição",
  }),
  isOutOfDiet: zod.enum(["yes", "no"], {
    required_error: "Selecione se a refeição está na dentro da dieta ou não!",
  }),
});

type NewMealFormData = zod.output<typeof newMealSchema>;

export function NewMeal() {
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

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<NewMealFormData>({
    resolver: zodResolver(newMealSchema),
  });

  function handleCreateNewMeal({
    dateWithoutHour,
    description,
    hour,
    isOutOfDiet,
    name,
  }: NewMealFormData) {
    console.log({ dateWithoutHour, description, hour, isOutOfDiet, name });
  }

  function handlePressInYes(animation: "pressIn" | "pressOut") {
    buttonAnimatedYes.transitionTo(animation);
  }

  function handlePressInNo(animation: "pressIn" | "pressOut") {
    buttonAnimatedNo.transitionTo(animation);
  }

  console.log(errors);

  return (
    <Container>
      <TopBar entering={SlideInUp.delay(50).duration(700)}>
        <NavigationHeader showTitle title="Nova refeição" />
      </TopBar>
      <Form entering={SlideInDown.delay(50).duration(700)}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange } }) => (
            <TextInput
              onChangeText={onChange}
              label="Nome"
              error={errors.name && errors.name.message}
            />
          )}
        />

        <Controller
          control={control}
          name="description"
          render={({ field: { onChange } }) => (
            <TextInput
              label="Descrição"
              onChangeText={onChange}
              multiline
              textAlignVertical="top"
              style={{ height: 120 }}
              error={errors.description && errors.description.message}
            />
          )}
        />

        <DateTimerContainer>
          <Controller
            control={control}
            name="dateWithoutHour"
            render={({ field: { onChange } }) => (
              <TextInput
                label="Data"
                onChangeText={onChange}
                error={errors.dateWithoutHour && errors.dateWithoutHour.message}
                parentStyle={{
                  flex: 1,
                }}
              />
            )}
          />
          <Controller
            control={control}
            name="hour"
            render={({ field: { onChange } }) => (
              <TextInput
                label="Hora"
                onChangeText={onChange}
                error={errors.hour && errors.hour.message}
                parentStyle={{
                  flex: 1,
                  marginLeft: 20,
                }}
              />
            )}
          />
        </DateTimerContainer>
        <ToggleContainer>
          <Label>Está dentro da dieta?</Label>
          <View style={{ flexDirection: "row", flex: 1, marginTop: 8 }}>
            <Controller
              control={control}
              name="isOutOfDiet"
              render={({ field: { onChange, value } }) => (
                <>
                  <ToggleButton
                    onPressIn={() => handlePressInYes("pressIn")}
                    onPressOut={() => handlePressInYes("pressOut")}
                    onPress={() => onChange("yes")}
                  >
                    <ToggleButtonContainer
                      active={value === "yes"}
                      state={buttonAnimatedYes}
                    >
                      <Circle />
                      <Label>Sim</Label>
                    </ToggleButtonContainer>
                  </ToggleButton>
                  <ToggleButton
                    style={{ marginLeft: 8 }}
                    onPress={() => onChange("no")}
                    onPressIn={() => handlePressInNo("pressIn")}
                    onPressOut={() => handlePressInNo("pressOut")}
                  >
                    <ToggleButtonContainer
                      state={buttonAnimatedNo}
                      active={value === "no"}
                      type="SECONDARY"
                    >
                      <Circle type="SECONDARY" />
                      <Label>Não</Label>
                    </ToggleButtonContainer>
                  </ToggleButton>
                </>
              )}
            />
          </View>
        </ToggleContainer>
        <Button
          disabled={isSubmitting}
          isLoading={isSubmitting}
          title="Cadastrar Refeição"
          style={{ flex: 1, marginTop: 250 }}
          onPress={() => handleSubmit(handleCreateNewMeal)}
        />
      </Form>
    </Container>
  );
}
