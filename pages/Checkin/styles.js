import React from "react";
import styled from "styled-components/native";

import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: #8be3d1;
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
  background-color: ${(props) =>
    props.background ? props.background : "#00cccc"};
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TextButtonCheckin = styled.Text`
  color: white;
  font-size: 20px;
`;

export const ModalLoading = styled.View`
  height: 80%;
  width: 100%;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ModalContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #fff;
`;

export const ContainerList = styled.View`
  height: 90%;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
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
  align-items: flex-start;
  justify-content: center;
  padding-left: 10px;
`;

export const ButtonClose = styled.Pressable`
  align-items: flex-end;
  padding-right: 20px;
  justify-content: center;
  height: 100%;
  width: 100px;
  position: absolute;
  right: 0;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  height: 90%;
  border: 1px solid #fff;
  margin-top: 10%;
  margin-bottom: 10px;
`;

export const Item = styled(RectButton)`
  min-height: 120px;
  background-color: #fff;
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
  border-left-width: 10px;
  elevation: 1.5;
  align-self: stretch;
  flex-direction: row;
  align-items: center;
`;

export const RowInfo = styled.View`
  align-self: stretch;
  width: 98%;
  flex-direction: column;
`;

export const ColInfo = styled.View`
  /* border: 1px solid green; */
  width: ${(props) => (props.width ? props.width : "50%")};
  margin-top: 2px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  /* border-bottom-width: 1px;
  border-bottom-color: #ccc;
  */
  padding-bottom: 5px;
`;

export const TextInfo = styled.Text`
  text-transform: uppercase;
  color: #777;
  margin-right: 5px;
  font-size: 15px;
  text-align: justify;
  margin-bottom: -8px;
`;

export const Status = styled.View`
  width: 5px;
  min-height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  position: absolute;
  margin-left: -10px;
  background-color: ${(props) => (props.complete ? "#00cc33" : "#777")};
`;

export const ColIcon = styled.View`
  width: 25px;
  align-items: center;
`;

export const ColData = styled.ScrollView``;
