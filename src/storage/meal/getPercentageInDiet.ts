import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storage.config";

export async function getPercentageInDiet() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals = storage ? JSON.parse(storage) : [];

    const numberOfMealInDiet = meals.reduce(
      (numberOfMeal: number, meal: any) => {
        if (meal.isInDiet) return numberOfMeal + 1;

        return numberOfMeal;
      },
      0
    );

    return Number(((numberOfMealInDiet * 100) / meals.length).toFixed(2));
  } catch (error) {}
}
