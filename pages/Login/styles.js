import React from "react";
import styled from "styled-components/native";

import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background: #93efc2;
  width: 100%;
`;

export const ContainerAnimation = styled.View`
  /* border: 1px solid red; */
  position: absolute;
  margin-top: 82%;
`;

export const ModalContainer = styled.View`
  height: 80%;
  width: 100%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #fff;
`;

export const ContainerTitle = styled.View`
  height: 10%;
  width: 100%;
  align-items: center;
  justify-content: center;
  top: 0;
  margin-top: 35%;
  position: absolute;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: #777;
`;

export const HeaderContainer = styled.View`
  height: 12%;
  width: 100%;
  background: #93efc2;
  position: absolute;
  top: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ButtonClose = styled.Pressable`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50px;
  position: absolute;
  right: 0;
`;

export const Form = styled.View`
  /* elevation: 7; */
  border-radius: 10px;
  height: 380px;
  flex: 1;
  margin-top: 20%;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  /* background: #93efc2; */
  z-index: 2;
`;

export const HeaderForm = styled.View`
  top: 0;
  margin-top: 30px;
  position: absolute;
  /* border: 1px solid red; */
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TitleForm = styled.Text`
  color: #333;
  font-size: 20px;
`;

export const BodyForm = styled.View``;

export const Input = styled.TextInput`
  elevation: 1;
  width: 300px;
  height: 50px;
  border-radius: 20px;
  margin-top: 20px;
  padding-left: 10px;
  font-size: 20px;
  background: #fff;
`;

export const InputUrl = styled.TextInput`
  elevation: 1;
  width: 300px;
  height: 50px;
  border-radius: 20px;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 20px;
  background: #ccc;
  color: #ffff;
`;

export const FooterForm = styled(GestureHandlerRootView)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(RectButton)`
  width: 300px;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 20px;
  elevation: 1;
  margin-top: 20px;
  background: #00cccc;
`;

export const ContainerConfig = styled(GestureHandlerRootView)``;

export const Config = styled(RectButton)`
  width: 40px;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 20px;
  margin-top: 10px;
  background: #93efc2;
`;

export const TextButtonSubmit = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-size: 17px;
`;
