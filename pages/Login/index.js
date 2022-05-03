import React, { Component } from "react";

import { View } from "react-native";

import Icon from "react-native-vector-icons/SimpleLineIcons";

import Ico from "react-native-vector-icons/Ionicons";

import Modal from "react-native-modal";

import LottieView from "lottie-react-native";

import animationChildrensHappy from "./assets/animations/childrens_happy.json";

import animationLoading from "./assets/animations/loading.json";

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
  ModalLoading,
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
    loading: false,
  };

  componentDidMount = () => {
    const { navigation } = this.props;

    navigation.setOptions({
      title: "Sistema de visitas PCF",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#8be3d1",
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

  handleSigin = () => {
    const { navigation } = this.props;
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({
        loading: false,
      });
      navigation.navigate("Home");
    }, 3000);
  };

  render() {
    const { modalVisible, loading } = this.state;

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
                <Button onPress={() => {}}>
                  <TextButtonSubmit>Conectar</TextButtonSubmit>
                </Button>
              </FooterForm>
            </ModalContainer>
          </View>
        </Modal>

        <Modal isVisible={loading}>
          <ModalLoading>
            <LottieView
              source={animationLoading}
              loop
              autoPlay
              style={{
                width: "100%",
                height: "100%",
                marginTop: 10,
                // resizeMode: "contain",
              }}
            />
          </ModalLoading>
        </Modal>

        <Form>
          {/* <HeaderForm>
            <TitleForm>LOGIN</TitleForm>
          </HeaderForm> */}

          <BodyForm>
            <Input placeholder="Nick" />
            <Input placeholder="Password" secureTextEntry={true} />
          </BodyForm>

          <FooterForm>
            <Button onPress={() => this.handleSigin()}>
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
              width: "100%",
              height: "100%",
              marginTop: 10,
              // resizeMode: "contain",
            }}
          />
        </ContainerAnimation>
      </Container>
    );
  }
}

export default Home;
