import React, { Component } from "react";

import { View, Dimensions } from "react-native";

import Icon from "react-native-vector-icons/SimpleLineIcons";

import Ico from "react-native-vector-icons/Ionicons";

import Modal from "react-native-modal";

import LottieView from "lottie-react-native";

import animationChildrensHappy from "./assets/animations/childrens_happy.json";

import {
  Container,
  Form,
  HeaderForm,
  TitleForm,
  BodyForm,
  Input,
  InputUrl,
  FooterForm,
  Button,
  TextButtonSubmit,
  Config,
  ModalContainer,
  HeaderContainer,
  ButtonClose,
  ContainerTitle,
  Title,
  ContainerConfig,
  ContainerAnimation,
} from "./styles";

class Home extends Component {
  state = {
    modalVisible: false,
  };

  componentDidMount = () => {
    const { navigation } = this.props;

    navigation.setOptions({
      title: "Sistema de visitas PCF",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#93efc2",
      },
      // animation: "slide_from_bottom",

      headerRight: () => (
        <ContainerConfig>
          <Config
            onPress={() => this.setState({ modalVisible: true })}
            title="Info"
            children={<Icon name="settings" size={20} color="#336666" />}
            color="#fff"
          />
        </ContainerConfig>
      ),
    });
  };

  handleModal = () => {
    const { modalVisible } = this.state;
    this.setState({
      modalVisible: !modalVisible,
    });
  };

  handleNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate("Home");
  };

  render() {
    const { modalVisible } = this.state;

    const windowWidth = Dimensions.get("window").width;

    return (
      <Container>
        <Modal isVisible={modalVisible}>
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
                <ButtonClose
                  onPress={() => this.setState({ modalVisible: false })}
                >
                  <Ico name="md-close" size={25} color="#336666" />
                </ButtonClose>
              </HeaderContainer>
              <ContainerTitle>
                <Title>Forneça o link de acesso ao servidor!</Title>
              </ContainerTitle>
              <InputUrl placeholder="URL" />

              <FooterForm>
                <Button onPress={() => this.handleNavigate()}>
                  <TextButtonSubmit>Conectar</TextButtonSubmit>
                </Button>
              </FooterForm>
            </ModalContainer>
          </View>
        </Modal>

        <Form>
          <HeaderForm>
            <TitleForm>LOGIN</TitleForm>
          </HeaderForm>

          <BodyForm>
            <Input placeholder="Nick" />
            <Input placeholder="Password" secureTextEntry={true} />
          </BodyForm>

          <FooterForm>
            <Button onPress={() => this.handleNavigate()}>
              <TextButtonSubmit>Entrar</TextButtonSubmit>
            </Button>
          </FooterForm>
        </Form>

        <ContainerAnimation>
          <LottieView
            source={animationChildrensHappy}
            loop
            autoPlay
            style={{
              width: windowWidth,
              height: 200,
              // resizeMode: "contain",
            }}
          />
        </ContainerAnimation>
      </Container>
    );
  }
}

export default Home;
