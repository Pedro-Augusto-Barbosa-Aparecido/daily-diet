import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Bold,
  CongratulationImage,
  Container,
  SubTitle,
  Title,
} from "./styles";

import inDietImage from "@assets/inDiet.png";
import outDietImage from "@assets/outDiet.png";
import { Button } from "@components/Button";

type CongratulationParams = {
  inDiet: boolean;
};

export function RegisterCongratulation() {
  const route = useRoute();
  const { navigate } = useNavigation();
  const { inDiet } = route.params as CongratulationParams;

  return (
    <Container>
      <Title type={inDiet ? "PRIMARY" : "SECONDARY"}>
        {inDiet ? "Continue assim!" : "Que pena!"}
      </Title>
      {inDiet ? (
        <SubTitle>
          Você continua <Bold>dentro da dieta</Bold>. Muito bem!
        </SubTitle>
      ) : (
        <SubTitle>
          Você <Bold>saiu da dieta</Bold> dessa vez, mas continue se esforçando
          e não desista!
        </SubTitle>
      )}
      <CongratulationImage source={inDiet ? inDietImage : outDietImage} />
      <Button
        title="Ir para a página inicial"
        onPress={() => navigate("home")}
      />
    </Container>
  );
}
