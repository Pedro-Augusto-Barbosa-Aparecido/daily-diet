import { Loading } from "@components/Loading";

import theme from "@theme/index";

import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { Route } from "@routes";

import "@lib/dayjs";

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { DietProvider } from "@context/DietContext";

export default function App() {
  const [isFontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <DietProvider>
      <ThemeProvider theme={theme}>
        {isFontsLoaded ? <Route /> : <Loading />}
        <StatusBar backgroundColor="transparent" translucent style="dark" />
      </ThemeProvider>
    </DietProvider>
  );
}
