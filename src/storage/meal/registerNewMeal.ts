import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storage.config";
import * as Crypto from "expo-crypto";

type RegisterNewMealParams = {
  name: string;
  description: string;
  isInDiet: boolean;
  date: string;
  hour: string;
};

export async function registerNewMeal(newMeal: RegisterNewMealParams) {
  // eslint-disable-next-line no-useless-catch
  try {
    const id = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      `${MEAL_COLLECTION}-${newMeal.name}`
    );

    const meals = await AsyncStorage.getItem(MEAL_COLLECTION);
    const savedMeals = meals ? JSON.parse(meals) : [];

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([...savedMeals, { id, ...newMeal }])
    );
  } catch (error) {
    throw error;
  }
}
