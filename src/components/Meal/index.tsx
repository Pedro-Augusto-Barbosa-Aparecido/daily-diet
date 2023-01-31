import {
  IndicatorBackgroundStyle,
  MealContainer,
  MealContent,
  MealIndicator,
  MealPrefix,
  MealSeparator,
} from "./styles";

type Props = {
  text: string;
  prefix: string;
  isOutOfDiet?: boolean;
};

export function Meal({ isOutOfDiet = false, prefix, text }: Props) {
  const type: IndicatorBackgroundStyle = isOutOfDiet ? "SECONDARY" : "PRIMARY";

  return (
    <MealContainer>
      <MealPrefix>{prefix}</MealPrefix>
      <MealSeparator />
      <MealContent>{text}</MealContent>
      <MealIndicator type={type} />
    </MealContainer>
  );
}
