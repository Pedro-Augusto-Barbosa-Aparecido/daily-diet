import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storage.config";
import dayjs from "dayjs";

interface Meal {
  id: string;
  name: string;
  description: string;
  isInDiet: boolean;
  date: string;
  hour: string;
}

export function orderByDate(meals: Array<{ date: string; meals: Meal[] }>) {
  return meals.sort((a, b) => {
    const dateOne = dayjs(a.date).startOf("date");
    const dateTwo = dayjs(b.date).startOf("date");

    if (dateOne.isBefore(dateTwo)) {
      return -1;
    }

    if (dateOne.isAfter(dateTwo)) {
      return 1;
    }

    return 0;
  });
}

export async function getMeals(): Promise<
  Array<{ date: string; meals: Meal[] }>
> {
  // eslint-disable-next-line no-useless-catch
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const mealsOnStorage = storage ? JSON.parse(storage) : [];
    const meals = mealsOnStorage.reduce(
      (state: Array<{ date: string; meals: Meal[] }>, meal: Meal) => {
        if (state.length === 0) {
          state.push({ date: meal.date, meals: [meal] });
          return state;
        }

        const indexOfMealDate = state.find((obj) => obj.date === meal.date);
        if (indexOfMealDate === undefined) {
          state.push({ date: meal.date, meals: [meal] });
          return state;
        }

        state[state.indexOf(indexOfMealDate)].meals.push(meal);
        return state;
      },
      [] as Array<{ date: string; meals: Meal[] }>
    );

    return orderByDate(meals);
  } catch (error) {
    throw error;
  }
}
