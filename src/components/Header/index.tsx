import { Image } from "react-native";
import { Avatar, Container } from "./styles";

import logo from "@assets/logo.png";
import myAvatar from "@assets/my-avatar.jpg";

export function Header() {
  return (
    <Container>
      <Image source={logo} />
      <Avatar source={myAvatar} />
    </Container>
  );
}
