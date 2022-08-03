import React, { Component } from "react";

import { Alert, Dimensions } from "react-native";

import NetInfo from "@react-native-community/netinfo";

import { CommonActions } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";

import Icon2 from "react-native-vector-icons/FontAwesome5";

import AsyncStorage from "@react-native-async-storage/async-storage";

import LottieView from "lottie-react-native";

import Icon3 from "react-native-vector-icons/Ionicons";

import loadingfile from "./assets/animations/loading.json";

import {
  Container,
  Item,
  List,
  Status,
  RowInfo,
  ColInfo,
  TextInfo,
  ColIcon,
  ContainerConfig,
  Config,
  AfterButton,
  BeforeButton,
  ViewContainer,
  ViewContainerLoading,
  RootView,
  InfoStatusSaved,
} from "./styles";
import axios from "axios";

class Home extends Component {
  state = {
    loading: false,
    time: 0,
    visitas: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;
    // await AsyncStorage.setItem("visitas", JSON.stringify([]));

    this.setState({ loading: true });

    // await AsyncStorage.removeItem("visitas");

    navigation.setOptions({
      title: "VISITAS",
      headerTitleAlign: "left",
      headerStyle: {
        backgroundColor: "#8be3d1",
      },
      animation: "slide_from_left",
      headerBackVisible: false,

      headerRight: () => (
        <ContainerConfig>
          <Config onPress={() => navigation.dispatch(CommonActions.goBack())}>
            <Icon name="sign-out" size={25} />
          </Config>
        </ContainerConfig>
      ),
    });

    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();

      // Prompt the user before leaving the screen
      Alert.alert(
        "Encerrar sessão?",
        "Após sair, os dados não serão mais sincronizados, tem certeza?",
        [
          { text: "Não", style: "cancel", onPress: () => {} },
          {
            text: "Sim",
            style: "destructive",
            // If the user confirmed, then we dispatch the action we blocked earlier
            // This will continue the action that had triggered the removal of the screen
            onPress: async () => {
              await AsyncStorage.removeItem("user"),
                navigation.dispatch(e.data.action);
            },
          },
        ]
      );
    });

    this.handleListVisitas();

    this.setState({ loading: false });

    this.checkNet();

    this.uploadVisitas();
  }

  checkNet = async () => {
    const time = setInterval(async () => {
      const response = await NetInfo.fetch();

      // console.log(response.isConnected);
      if (response.isConnected) {
        // console.log("Conectado");
      } else {
        console.log("Desconectado.");
      }
      this.uploadVisitas();
      this.handleListVisitasLocal();
    }, 10000);

    this.setState({
      time,
    });
  };

  handleSaveStorage = async (data) => {
    try {
      const newArray = [];
      const local = await AsyncStorage.getItem("visitas");
      const localVisits = JSON.parse(local);
      const visits = localVisits.visits;

      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const isSaved = visits.find((v) => v.id === element.id);
        if (isSaved) {
          newArray.push(isSaved);
        } else {
          newArray.push(element);
        }
      }

      const user = await AsyncStorage.getItem("user");
      const nick = JSON.parse(user);

      const storage = {
        user: nick.user.nick,
        visits: newArray,
      };

      await AsyncStorage.setItem("visitas", JSON.stringify(storage));
      console.log("Salvas em localStorage");
    } catch (error) {}

    this.handleListVisitasLocal();
  };

  uploadVisitas = async () => {
    const api = await AsyncStorage.getItem("api");
    const user = await AsyncStorage.getItem("user");
    const apiParsed = JSON.parse(api);
    const userParsed = JSON.parse(user);

    const url = apiParsed.url;

    const local = await AsyncStorage.getItem("visitas");
    const localVisitas = JSON.parse(local);
    const visitas = localVisitas.visits;

    const config = {
      headers: {
        Authorization: `Bearer ${userParsed.token}`,
      },
    };
    const data = {
      visitas,
    };

    await axios
      .put(`${url}/visita`, data, config)
      .then(async (response) => {
        // console.log(response.data.visitas);
        const newStorage = [];

        const uploaded = response.data.visitas;

        uploaded.forEach((visit) => {
          const isReg = visitas.find((v) => v.id === visit.id);
          if (isReg) {
            newStorage.push({ ...isReg, uploaded: true });
          }
        });

        const localstorage = {
          user: userParsed.nick,
          visits: newStorage,
        };

        await AsyncStorage.setItem("visitas", JSON.stringify(localstorage));
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };

  handleListVisitas = async () => {
    const api = await AsyncStorage.getItem("api");
    const user = await AsyncStorage.getItem("user");
    const apiParsed = JSON.parse(api);
    const userParsed = JSON.parse(user);

    const url = apiParsed.url;

    this.setState({
      loading: true,
    });

    const config = {
      headers: {
        Authorization: `Bearer ${userParsed.token}`,
      },
    };

    await axios
      .get(`${url}/visita`, config)
      .then(async (response) => {
        this.setState({
          loading: false,
        });
        // console.log(response.data);
        this.handleSaveStorage(response.data);
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });

        this.handleListVisitasLocal();
      });

    this.handleListVisitasLocal();
  };

  handleListVisitasLocal = async () => {
    const local = await AsyncStorage.getItem("visitas");
    const localVisits = JSON.parse(local);

    this.setState({
      visitas: localVisits.visits,
    });
  };

  componentWillUnmount() {
    const { time } = this.state;

    clearInterval(time);
  }

  handleSelectOptionFilter = (filter) => {
    this.setState({
      filterSelected: filter,
    });
  };

  renderItem = ({ item }) => {
    const { navigation } = this.props;

    return (
      <Item
        onPress={() => {
          navigation.navigate("Checkin", item);
        }}
      >
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
        </RowInfo>

        <InfoStatusSaved>
          {item.uploaded ? (
            <Icon3 name="checkmark-circle" color="#009966" size={20} />
          ) : (
            <Icon3 name="alert-circle" color="#777777" size={20} />
          )}
        </InfoStatusSaved>
      </Item>
    );
  };

  render() {
    const { visitas, loading } = this.state;
    const windowHeight = Dimensions.get("window").height;

    return (
      <Container>
        {loading ? (
          <ViewContainerLoading>
            <LottieView source={loadingfile} autoPlay loop />
          </ViewContainerLoading>
        ) : (
          <ViewContainer>
            <AfterButton marginTop={`${windowHeight - 200}px`}>
              <Icon name="chevron-right" size={20} color="#fff" />
            </AfterButton>
            <BeforeButton marginTop={`${windowHeight - 140}px`}>
              <Icon name="chevron-left" size={20} color="#fff" />
            </BeforeButton>
            <List
              // data={visitas.sort((a, b) => b.id - a.id)}
              data={visitas}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
            />
          </ViewContainer>
        )}
      </Container>
    );
  }
}

export default Home;
