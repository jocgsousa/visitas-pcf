import React, { Component } from "react";

// import { View } from "react-native";

import {
  Container,
  Form,
  Input,
  RootView,
  ButtonCheckin,
  TextButtonCheckin,
} from "./styles";

class Checkin extends Component {
  state = {};

  componentDidMount() {
    const { navigation, route } = this.props;
    const name = route.params.user.name.split(" ");

    navigation.setOptions({
      title: `VISITA: ${String(name[0]).toUpperCase()}`,
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#93efc2",
      },
      animation: "flip",
      headerBackVisible: true,
      headerRight: () => null,
    });
  }

  render() {
    return (
      <Container>
        <Form>
          <Input height="70px" placeholder="Atividade" />
          <Input
            placeholder="Observação:"
            multiline={true}
            numberOfLines={4}
            style={{ height: 200, textAlignVertical: "top" }}
          />
          <RootView>
            <ButtonCheckin>
              <TextButtonCheckin>Checkin</TextButtonCheckin>
            </ButtonCheckin>
          </RootView>
        </Form>
      </Container>
    );
  }
}

export default Checkin;
