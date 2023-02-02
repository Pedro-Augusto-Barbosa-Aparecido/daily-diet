import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { Resume } from "@screens/Resume";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
      initialRouteName="home"
    >
      <Screen name="home" component={Home} />
      <Screen name="resume" component={Resume} />
    </Navigator>
  );
}
