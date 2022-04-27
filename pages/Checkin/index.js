import React, { Component } from "react";

import Modal from "react-native-modal";

import Icon from "react-native-vector-icons/Entypo";
import Ico from "react-native-vector-icons/Ionicons";

import { View } from "react-native";

import {
  Container,
  Form,
  Input,
  RootView,
  ButtonCheckin,
  TextButtonCheckin,
  ModalContainer,
  HeaderContainer,
  ButtonClose,
  ContainerTitle,
  Title,
} from "./styles";

class Checkin extends Component {
  state = {
    modal: false,
  };

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
    const { modal } = this.state;
    return (
      <Container>
        <Modal isVisible={modal}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <ModalContainer>
              <HeaderContainer>
                <Title>Histórico de visitas</Title>
                <ButtonClose onPress={() => this.setState({ modal: false })}>
                  <Ico name="md-close" size={25} color="#336666" />
                </ButtonClose>
              </HeaderContainer>
              <ContainerTitle>
                <Title>Forneça o link de acesso ao servidor!</Title>
              </ContainerTitle>
            </ModalContainer>
          </View>
        </Modal>

        <Form>
          <Input height="70px" placeholder="Atividade" />
          <Input
            placeholder="Observação:"
            multiline={true}
            numberOfLines={4}
            style={{ height: 200, textAlignVertical: "top" }}
          />
          <RootView>
            <ButtonCheckin onPress={() => this.setState({ modal: true })}>
              <TextButtonCheckin>
                Histórico <Icon name="clock" size={20} />
              </TextButtonCheckin>
            </ButtonCheckin>
          </RootView>
          <RootView>
            <ButtonCheckin height="100px" background="#3399cc">
              <TextButtonCheckin>
                Checkin <Icon name="location" size={20} />
              </TextButtonCheckin>
            </ButtonCheckin>
          </RootView>
        </Form>
      </Container>
    );
  }
}

export default Checkin;
