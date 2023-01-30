import { Loading } from "@components/Loading";

import theme from "@theme/index";

import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { Home } from "@screens/Home";

export default function App() {
  const [isFontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {isFontsLoaded ? <Home /> : <Loading />}
      <StatusBar backgroundColor="transparent" translucent style="dark" />
    </ThemeProvider>
  );
}
