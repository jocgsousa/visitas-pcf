import React, { Component } from "react";

import Modal from "react-native-modal";

import Icon from "react-native-vector-icons/FontAwesome";
import Ico from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon4 from "react-native-vector-icons/SimpleLineIcons";

import { View, PermissionsAndroid, Platform, Alert } from "react-native";

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
  ContainerList,
  Title,
  List,
  Item,
  Status,
  RowInfo,
  ColInfo,
  ColIcon,
  TextInfo,
} from "./styles";

class Checkin extends Component {
  state = {
    modal: false,
    historico: [],
    latitude: "",
    longitude: "",
    watchID: 0,
  };

  componentDidMount() {
    const { navigation, route } = this.props;
    const name = route.params.user.name.split(" ");

    this.setState({
      historico: route.params.historico,
    });

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

  handleCheckin = async () => {
    if (Platform.OS === "ios") {
      this.getLocation();
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Permissão de Acesso à Localização",
          message: "Este aplicativo precisa acessar sua localização.",
          buttonNeutral: "Pergunte-me depois",
          buttonNegative: "Cancelar",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      } else {
        Alert.alert("Permissão de Localização negada", "adsd");
      }
    }
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const currentLatitude = JSON.stringify(position.coords.latitude);
        const currentLongitude = JSON.stringify(position.coords.longitude);

        this.setState({
          latitude: currentLatitude,
          longitude: currentLongitude,
        });
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    const watchID = navigator.geolocation.watchPosition((position) => {
      const currentLatitude = JSON.stringify(position.coords.latitude);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      this.setState({
        latitude: currentLatitude,
        longitude: currentLongitude,
      });
    });
    this.setState({
      watchID,
    });
  };

  renderItem = ({ item }) => {
    const { navigation } = this.props;

    return (
      <Item onPress={() => navigation.navigate("Checkin", item)}>
        <Status complete={item.complete}></Status>
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
              {item.endereco.logradouro} {item.endereco.numero}{" "}
              {item.endereco.bairro}
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
        </RowInfo>
      </Item>
    );
  };

  render() {
    const { modal, historico, latitude, longitude, watchID } = this.state;

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

        <Form>
          <Title>
            LT: {latitude} LG: {longitude} W: {watchID}{" "}
          </Title>
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
                Histórico <Icon4 name="clock" size={18} />
              </TextButtonCheckin>
            </ButtonCheckin>
          </RootView>
          <RootView>
            <ButtonCheckin
              height="100px"
              background="#3399cc"
              onPress={() => this.handleCheckin()}
            >
              <TextButtonCheckin>
                Checkin <Icon3 name="location" size={20} />
              </TextButtonCheckin>
            </ButtonCheckin>
          </RootView>
        </Form>
      </Container>
    );
  }
}

export default Checkin;
