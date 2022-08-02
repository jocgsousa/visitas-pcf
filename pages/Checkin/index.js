import React, { Component } from "react";

import Modal from "react-native-modal";

import Icon from "react-native-vector-icons/FontAwesome";
import Ico from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon4 from "react-native-vector-icons/SimpleLineIcons";

import { View, Alert, ActivityIndicator } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import LottieView from "lottie-react-native";

import * as Location from "expo-location";

import animationLoadingMap from "./assets/animations/loading-map.json";

import {
  Container,
  Form,
  Input,
  RootView,
  ButtonCheckin,
  TextButtonCheckin,
  ModalContainer,
  ModalLoading,
  HeaderContainer,
  ButtonClose,
  ContainerList,
  Title,
  List,
  Item,
  // Status,
  RowInfo,
  ColInfo,
  ColIcon,
  TextInfo,
  ColData,
} from "./styles";

class Checkin extends Component {
  state = {
    modal: false,
    historico: [],
    atividade: "",
    obs: "",
    visita: "",
    complete: false,
    visitas: [],
  };

  async componentDidMount() {
    const { navigation, route } = this.props;

    const name = route.params.user.name.split(" ");

    navigation.setOptions({
      title: `VISITA: ${String(name[0]).toUpperCase()}`,
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#8be3d1",
      },
      animation: "flip",
      headerBackVisible: true,
      headerRight: () => null,
    });

    const visitasSaved = await AsyncStorage.getItem("visitas");

    this.setState({
      historico: route.params.historico,
      visita: route.params,
      visitas: JSON.parse(visitasSaved),
      atividade: route.params.atividade,
      obs: route.params.obs,
      complete: route.params.complete,
    });
  }

  handleCheckin = async () => {
    const { atividade, visita, visitas, obs } = this.state;

    this.setState({
      loading: true,
    });

    if (atividade === "") {
      Alert.alert("Ops!", "Por favor informe a atividade a ser realizada!");
      this.setState({
        loading: false,
      });
      return false;
    }

    try {
      await Location.requestForegroundPermissionsAsync();

      let location = await Location.getCurrentPositionAsync({});

      const newStorage = visitas.map((visit) =>
        visit.id === visita.id
          ? {
              ...visita,
              atividade,
              obs,
              complete: true,
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }
          : visit
      );

      await AsyncStorage.setItem("visitas", JSON.stringify(newStorage));

      this.setState({
        complete: true,
      });
    } catch (error) {
      Alert.alert(
        "Falha ao salvar checkin",
        "Por favor ative o GPS para que o checkin seja bem sucedido!"
      );
    }

    this.setState({
      loading: false,
    });
  };

  renderItem = ({ item }) => {
    const { navigation } = this.props;

    return (
      <Item onPress={() => navigation.navigate("Checkin", item)}>
        {/* <Status complete={item.complete}></Status> */}
        <RowInfo>
          <ColInfo width="100%">
            <ColIcon>
              {item.user.sexo === "M" && (
                <Icon name="male" size={20} color="#0099cc" />
              )}
              {item.user.sexo === "F" && (
                <Icon name="female" size={20} color="#ff3399" />
              )}
              {!item.user.sexo && <Icon name="user" size={20} />}
            </ColIcon>
            <TextInfo>
              {item.user.name}{" "}
              {item.user.idade && ` - IDADE: ${item.user.idade}`}
            </TextInfo>
          </ColInfo>
          <ColInfo width="100%">
            <ColIcon>
              <Icon name="home" size={20} color="#00cc99" />
            </ColIcon>
            <TextInfo>
              {item.user.endereco && item.user.endereco.logradouro}{" "}
              {item.user.endereco && item.user.endereco.numero}
              {item.user.endereco && item.user.endereco.bairro}
            </TextInfo>
          </ColInfo>

          <ColInfo width="100%">
            <ColIcon>
              <Icon2 name="user-tie" size={20} color="#00cc99" />
            </ColIcon>
            <TextInfo>{item.author.name}</TextInfo>
          </ColInfo>

          <ColInfo width="100%">
            <ColIcon>
              <Icon2 name="calendar" size={20} color="#00cc99" />
            </ColIcon>
            <TextInfo>{item.data}</TextInfo>
          </ColInfo>

          <ColInfo width="100%">
            <ColIcon>
              <Icon2 name="flag" size={20} color="#00cc99" />
            </ColIcon>
            <TextInfo style={{ backgroundColor: "#ccc" }}>
              {item.atividade}
            </TextInfo>
          </ColInfo>

          <ColInfo width="100%">
            {/* <ColIcon> */}
            {/* <Icon2 name="info" size={20} color="#00cc99" /> */}
            {/* </ColIcon> */}
            <ColData>
              <TextInfo style={{ paddingBottom: 20 }}>{item.obs}</TextInfo>
            </ColData>
          </ColInfo>
        </RowInfo>
      </Item>
    );
  };

  render() {
    const { modal, historico, loading, atividade, obs, complete } = this.state;

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
                <Title>Histórico de visitas {historico.length}</Title>
                <ButtonClose onPress={() => this.setState({ modal: false })}>
                  <Ico name="md-close" size={25} color="#336666" />
                </ButtonClose>
              </HeaderContainer>
              <ContainerList>
                <List
                  data={historico}
                  renderItem={this.renderItem}
                  keyExtractor={(item) => item.id}
                />
              </ContainerList>
            </ModalContainer>
          </View>
        </Modal>

        <Modal isVisible={loading}>
          <ModalLoading>
            <LottieView
              source={animationLoadingMap}
              loop
              autoPlay
              style={
                {
                  // width: "50%",
                  // height: "50%",
                  // marginTop: 10,
                  // resizeMode: "contain",
                }
              }
            />
          </ModalLoading>
        </Modal>

        <Form>
          <Input
            height="70px"
            placeholder="Atividade"
            value={atividade}
            onChangeText={(value) => this.setState({ atividade: value })}
          />
          <Input
            placeholder="Observação:"
            onChangeText={(value) => this.setState({ obs: value })}
            multiline={true}
            value={obs}
            numberOfLines={4}
            style={{ height: 200, textAlignVertical: "top" }}
          />
          <RootView>
            <ButtonCheckin onPress={() => this.setState({ modal: true })}>
              <TextButtonCheckin>
                Histórico <Icon4 name="clock" size={18} />
              </TextButtonCheckin>
            </ButtonCheckin>
          </RootView>
          <RootView>
            <ButtonCheckin
              height="100px"
              background={complete ? "#009966" : "#3399cc"}
              onPress={() => (!complete ? this.handleCheckin() : {})}
            >
              {loading ? (
                <ActivityIndicator size="large" color="#fff" />
              ) : (
                <TextButtonCheckin>
                  Check-in
                  {complete ? (
                    <Icon3 name="checkmark-circle" size={20} />
                  ) : (
                    <Icon3 name="location" size={20} />
                  )}
                </TextButtonCheckin>
              )}
            </ButtonCheckin>
          </RootView>
        </Form>
      </Container>
    );
  }
}

export default Checkin;
