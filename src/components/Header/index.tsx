import { Image, TouchableOpacity } from "react-native";
import {
  Avatar,
  ButtonBack,
  Container,
  NavigationHeaderContainer,
  Title,
} from "./styles";

import logo from "@assets/logo.png";
import myAvatar from "@assets/my-avatar.jpg";
import { useNavigation } from "@react-navigation/native";

export function Header() {
  return (
    <Container>
      <Image source={logo} />
      <Avatar source={myAvatar} />
    </Container>
  );
}

type Props = {
  showTitle?: boolean;
  title?: string;
};

export function NavigationHeader({ title, showTitle = false }: Props) {
  const { goBack } = useNavigation();

  return (
    <NavigationHeaderContainer>
      <TouchableOpacity onPress={goBack} style={{ width: 30 }}>
        <ButtonBack weight="bold" />
      </TouchableOpacity>
      {showTitle && <Title>{title}</Title>}
    </NavigationHeaderContainer>
  );
}
