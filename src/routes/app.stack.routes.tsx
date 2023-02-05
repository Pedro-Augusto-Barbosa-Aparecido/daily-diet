import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { NewMeal } from "@screens/NewMeal";
import { RegisterCongratulation } from "@screens/RegisterCongratulation";
import { Resume } from "@screens/Resume";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Screen name="home" component={Home} />
      <Screen name="resume" component={Resume} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen
        name="registerCongratulation"
        component={RegisterCongratulation}
      />
    </Navigator>
  );
}
