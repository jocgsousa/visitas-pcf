import React, { Component } from "react";

import { View } from "react-native";

// import { Container } from './styles';

class Checkin extends Component {
  state = {};

  componentDidMount() {
    const { navigation, route } = this.props;
    navigation.setOptions({
      title: `VISITA: ${route.params.user.name}`,
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
    return <View />;
  }
}

export default Checkin;
