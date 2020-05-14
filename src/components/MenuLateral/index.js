import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Avatar, ListItem, Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function MenuLateral() {
  const [loading, setLoading] = useState(false);
  const [loged, setLoged] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState("flex");
  const [showRegisterForm, setShowRegisterForm] = useState("none");

  useEffect(() => {
    if (showLoginForm == "flex") {
      setShowRegisterForm("none");
    } else {
      setShowRegisterForm("flex");
    }
  }, [showLoginForm]);

  const handleLogout = () => {
    Alert.alert(
      "Atenção",
      "Tem certeza que deseja sair?",
      [
        {
          text: "Não",
          onPress: () => {
            //
          },
        },
        {
          text: "Sim",
          onPress: () => {
            setShowLoginForm("flex");
            setLoged(false);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleLogin = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        "Atenção",
        "Usuário não encontrado, verifique sua senha e tente novamente"
      );
    }, 3000);
  };
  const handleRegister = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoged(true);
    }, 3000);
  };

  return (
    <View>
      {loged ? (
        <View style={styles.menuHeader}>
          <View style={styles.menuAvatar}>
            <Avatar
              size="large"
              title="AR"
              rounded
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
            <Text style={styles.userName}>Olá, Armando Luiz Bretas Neto</Text>
            <Text style={styles.userEmail}>armando.gazin@gmail.com</Text>
          </View>
        </View>
      ) : (
        <>
          <View style={{ padding: 10, display: showLoginForm }}>
            <Text
              style={{
                textAlign: "center",
                padding: 20,
                fontSize: 24,
                color: "#41414d",
              }}
            >
              Faça Login para continuar
            </Text>
            <View>
              <Input
                placeholder=" Digite seu email"
                leftIcon={<Feather name="mail" size={24} color="#41414d" />}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Input
                placeholder=" Digite sua senha"
                leftIcon={<Feather name="lock" size={24} color="#41414d" />}
                secureTextEntry={true}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Button onPress={handleLogin} loading={loading} title="Entrar" />
            </View>
            <View style={{ margin: 10 }}>
              <Button
                type="outlined"
                title="Ainda não tem uma conta? Cadastre-se"
                onPress={() => setShowLoginForm("none")}
              />
            </View>
          </View>

          <View style={{ padding: 10, display: showRegisterForm }}>
            <Text
              style={{
                textAlign: "center",
                padding: 20,
                fontSize: 24,
                color: "#41414d",
              }}
            >
              {`Para criar seu usuário\npreencha as informações abaixo`}
            </Text>
            <View>
              <Input
                placeholder=" Digite seu nome"
                leftIcon={<Feather name="user" size={24} color="#41414d" />}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Input
                placeholder=" Digite seu email"
                leftIcon={<Feather name="mail" size={24} color="#41414d" />}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Input
                placeholder=" Digite sua senha"
                leftIcon={<Feather name="lock" size={24} color="#41414d" />}
                secureTextEntry={true}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Button
                onPress={handleRegister}
                loading={loading}
                title="Registrar-se"
              />
            </View>
          </View>
        </>
      )}

      {loged ? (
        <>
          <ListItem
            title={"Ir para tela inicial"}
            leftIcon={
              <Icon
                name="home"
                size={20}
                color="#495057"
                style={styles.iconSubmenu}
              />
            }
            bottomDivider
            chevron
          />
          <ListItem
            title={"Ver meus pedidos"}
            leftIcon={
              <Icon
                name="list"
                size={20}
                color="#495057"
                style={styles.iconSubmenu}
              />
            }
            bottomDivider
            chevron
          />
          <ListItem
            title={"Últimos produtos vistos"}
            leftIcon={
              <Icon
                name="history"
                size={20}
                color="#495057"
                style={styles.iconSubmenu}
              />
            }
            bottomDivider
            chevron
          />
          <ListItem
            title={"Endereços"}
            leftIcon={
              <Icon
                name="truck"
                size={20}
                color="#495057"
                style={styles.iconSubmenu}
              />
            }
            bottomDivider
            chevron
          />
          <ListItem
            title={"Cartões"}
            leftIcon={
              <Icon
                name="credit-card"
                size={20}
                color="#495057"
                style={styles.iconSubmenu}
              />
            }
            bottomDivider
            chevron
          />
          <ListItem
            title={"Senha de acesso"}
            leftIcon={
              <Icon
                name="unlock-alt"
                size={20}
                color="#495057"
                style={styles.iconSubmenu}
              />
            }
            bottomDivider
            chevron
          />
          <ListItem
            title={"Sair"}
            onPress={handleLogout}
            leftIcon={
              <Icon
                name="power-off"
                size={20}
                color="#495057"
                style={styles.iconSubmenu}
              />
            }
            bottomDivider
            chevron
          />
        </>
      ) : null}
    </View>
  );
}
