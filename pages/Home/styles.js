import React from "react";
import styled from "styled-components/native";
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background: #93efc2;
  width: 100%;
  height: 100%;
`;

export const List = styled.FlatList`
  flex: 1;
  background-color: #93efc2;
  height: 100%;
`;

export const Item = styled(RectButton)`
  height: 120px;
  background-color: #fff;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
  border-left-width: 10px;
  elevation: 1.5;
  align-self: stretch;
  flex-direction: row;
  align-items: center;
`;

export const BeforeButton = styled(RectButton)`
  position: absolute;
  right: 0;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "160px")};
  margin-right: 2%;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  /* border-radius: 25px; */
  z-index: 2;
`;

export const AfterButton = styled(RectButton)`
  position: absolute;
  right: 0;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "100px")};
  margin-right: 2%;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  /* border-radius: 25px; */
  z-index: 2;
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
  margin-bottom: -8px;
`;

export const Status = styled.View`
  width: 5px;
  height: 120px;
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

export const ContainerConfig = styled(GestureHandlerRootView)``;

export const ViewContainer = styled.View`
  flex: 1;
`;

export const ViewContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Config = styled(RectButton)`
  height: 40px;
  width: 40px;
  margin-top: 5px;
  border: 1px solid red;
  align-items: center;
  justify-content: center;
`;
