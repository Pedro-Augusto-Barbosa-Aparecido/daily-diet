import dayjs from "dayjs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storage.config";

interface IResume {
  bestSequency: number;
  numberOfMealRegistred: number;
  mealsInDiet: number;
  mealsOutDiet: number;
}

export function orderByDate(meals: Array<any>) {
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

export async function getResumeOfDiet(): Promise<IResume> {
  const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
  const meals = storage ? JSON.parse(storage) : [];

  const resume = {
    bestSequency: 0,
    numberOfMealRegistred: meals.length,
    mealsInDiet: 0,
    mealsOutDiet: 0,
  };

  const bestSequency: number[] = [];
  let bestSequencyNumber = 0;

  orderByDate(meals).forEach((meal: any, index: number) => {
    if (meal.isInDiet) {
      bestSequencyNumber += 1;
    } else {
      bestSequency.push(bestSequencyNumber);
      bestSequencyNumber = 0;
    }
  });

  resume.bestSequency = Math.max(...bestSequency, bestSequencyNumber);
  resume.mealsInDiet = meals.filter((meal: any) => meal.isInDiet).length;
  resume.mealsOutDiet = meals.filter((meal: any) => !meal.isInDiet).length;

  return resume;
}
