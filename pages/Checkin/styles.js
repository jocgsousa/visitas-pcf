import React from "react";
import styled from "styled-components/native";

import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: #93efc2;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
`;

export const Form = styled.View`
  height: 100%;
  width: 100%;
  /* border: 1px solid red; */
  justify-content: flex-start;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 95%;
  height: ${(props) => (props.height ? props.height : "50px")};
  background-color: #fff;
  margin-top: 10px;
  elevation: 2;
  border-radius: 10px;
  padding-left: 5px;
  font-size: 20px;
  padding: 4px;
`;

export const RootView = styled(GestureHandlerRootView)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ButtonCheckin = styled(RectButton)`
  width: 95%;
  height: ${(props) => (props.height ? props.height : "60px")};
  background-color: #fff;
  border-radius: 10px;
  elevation: 2;
  background-color: #00cccc;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TextButtonCheckin = styled.Text`
  color: white;
  font-size: 20px;
`;
