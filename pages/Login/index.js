import React, { Component } from "react";

import { Alert, View } from "react-native";

import Icon from "react-native-vector-icons/SimpleLineIcons";

import Ico from "react-native-vector-icons/Ionicons";

import Modal from "react-native-modal";

import LottieView from "lottie-react-native";

import { io } from "socket.io-client";

import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

import animationChildrensHappy from "./assets/animations/childrens_happy.json";

import animationLoading from "./assets/animations/loading.json";

import {
  Container,
  Form,
  // HeaderForm,
  // TitleForm,
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
  TitleAlert,
  ViewAlert,
} from "./styles";

window.navigator.userAgent = "react-native";

class Home extends Component {
  state = {
    modalVisible: false,
    loading: false,
    nick: "",
    password: "",
    api: "",
  };

  componentDidMount = async () => {
    const { api } = this.state;

    const { navigation } = this.props;

    this.setState({ loading: true });

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

    const socket = io(api);

    socket.connect();

    socket.on("connection", (socket) => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });

    const data = await AsyncStorage.getItem("api");

    const dataParsed = data ? JSON.parse(data) : "";

    this.setState({
      api: dataParsed.url,
    });

    const isUser = await AsyncStorage.getItem("user");

    if (isUser) {
      navigation.navigate("Home");
    }

    this.setState({ loading: false });
  };

  handleModal = () => {
    const { modalVisible } = this.state;
    this.setState({
      modalVisible: !modalVisible,
    });
  };

  handleSigin = async () => {
    const { api, nick, password } = this.state;

    const { navigation } = this.props;

    this.setState({ loading: true });

    const data = {
      nick,
      password,
    };

    await axios
      .post(`${api}/create-session`, data)
      .then(async (response) => {
        const data = JSON.stringify(response.data);
        await AsyncStorage.setItem("user", data);

        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.data.password && !error.response.data.user) {
          Alert.alert("Senha!", error.response.data.error);
        }
        if (!error.response.data.password && error.response.data.user) {
          Alert.alert("Usuário", error.response.data.error);
        }

        if (!error.response.data) {
          Alert.alert(
            "Conexão",
            "Falha ao realizar conexão com o servidor, tente novamente mais tarde."
          );
        }
      });

    this.setState({ loading: false });
  };

  handleSaveApi = async () => {
    const { api } = this.state;
    const data = {
      url: api,
      date: new Date(),
    };

    try {
      await AsyncStorage.setItem("api", JSON.stringify(data));
      this.setState({
        modalVisible: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { modalVisible, loading, api, nick, password } = this.state;

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
                <Title>Forneça o link de acesso ao servidor! </Title>
              </ContainerTitle>
              <InputUrl
                placeholder="URL"
                value={api}
                onChangeText={(e) => this.setState({ api: e })}
                autoCapitalize="none"
              />

              <FooterForm>
                <Button onPress={() => this.handleSaveApi()}>
                  <TextButtonSubmit>Salvar</TextButtonSubmit>
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
            {!api && (
              <ViewAlert>
                <TitleAlert>Para ter acesso configure clicando em</TitleAlert>
                <Icon name="settings" size={20} color="#336666" />
              </ViewAlert>
            )}
            <Input
              placeholder="Nick"
              onChangeText={(e) => this.setState({ nick: e })}
              value={nick}
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(e) => this.setState({ password: e })}
              value={password}
            />
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
