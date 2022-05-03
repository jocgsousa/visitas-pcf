import React, { Component } from "react";

import { Alert, Dimensions } from "react-native";

import NetInfo from "@react-native-community/netinfo";

import { CommonActions } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";

import Icon2 from "react-native-vector-icons/FontAwesome5";

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
} from "./styles";

class Home extends Component {
  state = {
    time: 0,
    visitas: [
      {
        id: 1,
        author: {
          id: 1,
          name: "Jociel Gregorio de Sousa",
          departamento: {
            id: 1,
            name: "CRIANÇA FELIZ",
          },
        },
        data: "02/05/2022 12:00 PM",
        endereco: {
          id: 1,
          logradouro: "Rua 5 de abril",
          cep: "68500040",
          lat: "",
          lon: "",
          numero: "1740",
          bairro: "Velha Maraba",
          referencia: "",
          moradia: "",
        },
        user: {
          id: 1,
          name: "Ana Júlia Almeida",
          idade: "5",
          sexo: "F",
          data_nascimento: "11/11/1997",
        },
        atividade: "",
        obs: "",
        complete: false,
        latitude: "",
        longitude: "",
        historico: [
          {
            id: 1,
            author: {
              id: 1,
              name: "Jociel Gregorio de Sousa",
              departamento: {
                id: 1,
                name: "CRIANÇA FELIZ",
              },
            },
            data: "02/05/2022 12:00 PM",
            endereco: {
              id: 1,
              logradouro: "Rua 5 de abril",
              cep: "68500040",
              lat: "",
              lon: "",
              numero: "1740",
              bairro: "Velha Maraba",
              referencia: "",
              moradia: "",
            },
            user: {
              id: 1,
              name: "Ana Júlia Almeida",
              idade: "5",
              sexo: "F",
              data_nascimento: "11/11/1997",
            },
            atividade: "Recreativa",
            obs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            complete: false,
            historico: [],
          },
          {
            id: 2,
            author: {
              id: 1,
              name: "Jociel Gregorio de Sousa",
              departamento: {
                id: 1,
                name: "CRIANÇA FELIZ",
              },
            },
            data: "03/05/2022 12:00 PM",
            endereco: {
              id: 1,
              logradouro: "Rua 5 de abril",
              cep: "68500040",
              lat: "",
              lon: "",
              numero: "1740",
              bairro: "Velha Maraba",
              referencia: "",
              moradia: "",
            },
            user: {
              id: 1,
              name: "Ana Júlia Almeida",
              idade: "5",
              sexo: "F",
              data_nascimento: "11/11/1997",
            },
            atividade: "Recreativa",
            obs: "",
            complete: false,
            historico: [],
          },
          {
            id: 3,
            author: {
              id: 1,
              name: "Jociel Gregorio de Sousa",
              departamento: {
                id: 1,
                name: "CRIANÇA FELIZ",
              },
            },
            data: "03/05/2022 12:00 PM",
            endereco: {
              id: 1,
              logradouro: "Rua 5 de abril",
              cep: "68500040",
              lat: "",
              lon: "",
              numero: "1740",
              bairro: "Velha Maraba",
              referencia: "",
              moradia: "",
            },
            user: {
              id: 1,
              name: "Ana Júlia Almeida",
              idade: "5",
              sexo: "F",
              data_nascimento: "11/11/1997",
            },
            atividade: "",
            obs: "",
            complete: false,
            historico: [],
          },
          {
            id: 4,
            author: {
              id: 1,
              name: "Jociel Gregorio de Sousa",
              departamento: {
                id: 1,
                name: "CRIANÇA FELIZ",
              },
            },
            data: "03/05/2022 12:00 PM",
            endereco: {
              id: 1,
              logradouro: "Rua 5 de abril",
              cep: "68500040",
              lat: "",
              lon: "",
              numero: "1740",
              bairro: "Velha Maraba",
              referencia: "",
              moradia: "",
            },
            user: {
              id: 1,
              name: "Ana Júlia Almeida",
              idade: "5",
              sexo: "F",
              data_nascimento: "11/11/1997",
            },
            atividade: "",
            obs: "",
            complete: false,
            historico: [],
          },
          {
            id: 5,
            author: {
              id: 1,
              name: "Jociel Gregorio de Sousa",
              departamento: {
                id: 1,
                name: "CRIANÇA FELIZ",
              },
            },
            data: "03/05/2022 12:00 PM",
            endereco: {
              id: 1,
              logradouro: "Rua 5 de abril",
              cep: "68500040",
              lat: "",
              lon: "",
              numero: "1740",
              bairro: "Velha Maraba",
              referencia: "",
              moradia: "",
            },
            user: {
              id: 1,
              name: "Ana Júlia Almeida",
              idade: "5",
              sexo: "F",
              data_nascimento: "11/11/1997",
            },
            atividade: "",
            obs: "",
            complete: false,
            historico: [],
          },
        ],
      },
      {
        id: 2,
        author: {
          id: 2,
          name: "Jociel Gregorio de Sousa",
          departamento: {
            id: 2,
            name: "CRIANÇA FELIZ",
          },
        },
        data: "02/05/2022 12:00 PM",
        endereco: {
          id: 2,
          logradouro: "Rua 5 de abril",
          cep: "68500040",
          lat: "",
          lon: "",
          numero: "1740",
          referencia: "",
          bairro: "Velha Maraba",
          moradia: "",
        },
        user: {
          id: 2,
          name: "Fernando",
          idade: "5",
          sexo: "M",
          data_nascimento: "11/11/1997",
        },
        atividade: "",
        obs: "",
        complete: true,
        latitude: "",
        longitude: "",
        historico: [],
      },
      {
        id: 3,
        author: {
          id: 3,
          name: "Jociel Gregorio de Sousa",
          departamento: {
            id: 3,
            name: "CRIANÇA FELIZ",
          },
        },
        data: "02/05/2022 12:00 PM",
        endereco: {
          id: 3,
          logradouro: "Rua 5 de abril",
          cep: "68500040",
          lat: "",
          lon: "",
          numero: "1740",
          referencia: "",
          bairro: "Velha maraba",
          moradia: "",
        },
        user: {
          id: 3,
          name: "Fernando",
          idade: "5",
          sexo: "M",
          data_nascimento: "11/11/1997",
        },
        atividade: "",
        obs: "",
        complete: false,
        latitude: "",
        longitude: "",
        historico: [],
      },
      {
        id: 4,
        author: {
          id: 4,
          name: "Jociel Gregorio de Sousa",
          departamento: {
            id: 4,
            name: "CRIANÇA FELIZ",
          },
        },
        data: "02/05/2022 12:00 PM",
        endereco: {
          id: 4,
          logradouro: "Rua 5 de abril",
          cep: "68500040",
          lat: "",
          lon: "",
          numero: "1740",
          referencia: "",
          bairro: "Velha maraba",
          moradia: "",
        },
        user: {
          id: 4,
          name: "Fernando",
          idade: "5",
          sexo: "M",
          data_nascimento: "11/11/1997",
        },
        atividade: "",
        obs: "",
        complete: false,
        latitude: "",
        longitude: "",
        historico: [],
      },
      {
        id: 5,
        author: {
          id: 5,
          name: "Jociel Gregorio de Sousa",
          departamento: {
            id: 5,
            name: "CRIANÇA FELIZ",
          },
        },
        data: "02/05/2022 12:00 PM",
        endereco: {
          id: 5,
          logradouro: "Rua 5 de abril",
          cep: "68500050",
          lat: "",
          lon: "",
          numero: "1750",
          referencia: "",
          bairro: "Velha maraba",
          moradia: "",
        },
        user: {
          id: 5,
          name: "Fernando",
          idade: "5",
          sexo: "M",
          data_nascimento: "11/11/1997",
        },
        atividade: "",
        obs: "",
        complete: false,
        latitude: "",
        longitude: "",
        historico: [],
      },
      {
        id: 6,
        author: {
          id: 6,
          name: "Jociel Gregorio de Sousa",
          departamento: {
            id: 6,
            name: "CRIANÇA FELIZ",
          },
        },
        data: "02/05/2022 12:00 PM",
        endereco: {
          id: 6,
          logradouro: "Rua 5 de abril",
          cep: "68500050",
          lat: "",
          lon: "",
          numero: "1750",
          referencia: "",
          bairro: "Velha maraba",
          moradia: "",
        },
        user: {
          id: 6,
          name: "Clarice de Almeida Silva",
          idade: "5",
          sexo: "F",
          data_nascimento: "11/11/1997",
        },
        atividade: "",
        obs: "",
        complete: false,
        latitude: "",
        longitude: "",
        historico: [],
      },
      {
        id: 7,
        author: {
          id: 6,
          name: "Jociel Gregorio de Sousa",
          departamento: {
            id: 6,
            name: "CRIANÇA FELIZ",
          },
        },
        data: "02/05/2022 12:00 PM",
        endereco: {
          id: 6,
          logradouro: "Rua 5 de abril",
          cep: "68500050",
          lat: "",
          lon: "",
          numero: "1750",
          referencia: "",
          bairro: "Velha maraba",
          moradia: "",
        },
        user: {
          id: 6,
          name: "Clarice de Almeida Silva",
          idade: "5",
          sexo: "F",
          data_nascimento: "11/11/1997",
        },
        atividade: "",
        obs: "",
        complete: false,
        latitude: "",
        longitude: "",
        historico: [],
      },
      {
        id: 8,
        author: {
          id: 6,
          name: "Jociel Gregorio de Sousa",
          departamento: {
            id: 6,
            name: "CRIANÇA FELIZ",
          },
        },
        data: "02/05/2022 12:00 PM",
        endereco: {
          id: 6,
          logradouro: "Rua 5 de abril",
          cep: "68500050",
          lat: "",
          lon: "",
          numero: "1750",
          referencia: "",
          bairro: "Velha maraba",
          moradia: "",
        },
        user: {
          id: 6,
          name: "Clarice de Almeida Silva",
          idade: "5",
          sexo: "F",
          data_nascimento: "11/11/1997",
        },
        atividade: "",
        obs: "",
        complete: false,
        latitude: "",
        longitude: "",
        historico: [],
      },
      {
        id: 9,
        author: {
          id: 6,
          name: "Jociel Gregorio de Sousa",
          departamento: {
            id: 6,
            name: "CRIANÇA FELIZ",
          },
        },
        data: "02/05/2022 12:00 PM",
        endereco: {
          id: 6,
          logradouro: "Rua 5 de abril",
          cep: "68500050",
          lat: "",
          lon: "",
          numero: "1750",
          referencia: "",
          bairro: "Velha maraba",
          moradia: "",
        },
        user: {
          id: 6,
          name: "Clarice de Almeida Silva",
          idade: "5",
          sexo: "F",
          data_nascimento: "11/11/1997",
        },
        atividade: "",
        obs: "",
        complete: false,
        latitude: "",
        longitude: "",
        historico: [],
      },
      {
        id: 10,
        author: {
          id: 6,
          name: "Jociel Gregorio de Sousa",
          departamento: {
            id: 6,
            name: "CRIANÇA FELIZ",
          },
        },
        data: "02/05/2022 12:00 PM",
        endereco: {
          id: 6,
          logradouro: "Rua 5 de abril",
          cep: "68500050",
          lat: "",
          lon: "",
          numero: "1750",
          referencia: "",
          bairro: "Velha maraba",
          moradia: "",
        },
        user: {
          id: 6,
          name: "Clarice de Almeida Silva",
          idade: "5",
          sexo: "F",
          data_nascimento: "11/11/1997",
        },
        atividade: "",
        obs: "",
        complete: false,
        latitude: "",
        longitude: "",
        historico: [],
      },
      {
        id: 11,
        author: {
          id: 6,
          name: "Jociel Gregorio de Sousa",
          departamento: {
            id: 6,
            name: "CRIANÇA FELIZ",
          },
        },
        data: "02/05/2022 12:00 PM",
        endereco: {
          id: 6,
          logradouro: "Rua 5 de abril",
          cep: "68500050",
          lat: "",
          lon: "",
          numero: "1750",
          referencia: "",
          bairro: "Velha maraba",
          moradia: "",
        },
        user: {
          id: 6,
          name: "Clarice de Almeida Silva",
          idade: "5",
          sexo: "F",
          data_nascimento: "11/11/1997",
        },
        atividade: "",
        obs: "",
        complete: false,
        latitude: "",
        longitude: "",
        historico: [],
      },
    ],
  };

  componentDidMount() {
    const { navigation } = this.props;

    navigation.setOptions({
      title: "VISITAS",
      headerTitleAlign: "left",
      headerStyle: {
        backgroundColor: "#93efc2",
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
            onPress: () => navigation.dispatch(e.data.action),
          },
        ]
      );
    });

    this.checkNet();
  }

  checkNet = async () => {
    const time = setInterval(async () => {
      const response = await NetInfo.fetch();
      // console.log(response.isConnected);
      if (response.isConnected) {
        // console.log("Conectado");
      } else {
        // console.log("Desconectado");
      }
    }, 1000);

    this.setState({
      time,
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
    const { visitas } = this.state;
    const windowHeight = Dimensions.get("window").height;

    return (
      <Container>
        <TextInfo></TextInfo>
        <AfterButton marginTop={`${windowHeight - 200}px`}>
          <Icon name="chevron-right" size={20} color="#fff" />
        </AfterButton>
        <BeforeButton marginTop={`${windowHeight - 140}px`}>
          <Icon name="chevron-left" size={20} color="#fff" />
        </BeforeButton>
        <List
          data={visitas}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
        />
      </Container>
    );
  }
}

export default Home;
