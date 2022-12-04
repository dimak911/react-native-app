import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const bgImage = require("../../../assets/bg.jpeg");
const plusIcon = require("../../../assets/add.png");

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../../../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const onChangeLogin = (value) => {
    setLogin(value);
  };
  const onChangeEmail = (value) => {
    setEmail(value);
  };
  const onChangePassword = (value) => {
    setPassword(value);
  };

  const onShowPassBtn = () => {
    setPasswordIsHidden(!passwordIsHidden);
  };

  const handleSubmit = () => {
    //
  };

  const switchScreens = () => {
    //
  };
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.fromWrapper}>
          <View style={styles.avatar}>
            <Image source={plusIcon} style={styles.plus} />
          </View>
          <Text style={styles.title}>Регистрация</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeLogin}
              value={login}
              placeholder={"Логин"}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder={"Адрес электронной почты"}
            />
            <View style={styles.passwordWrapper}>
              <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder={"Пароль"}
                secureTextEntry={passwordIsHidden}
              />
              <TouchableOpacity
                style={styles.showPassBtn}
                onPress={onShowPassBtn}
              >
                <Text>{passwordIsHidden ? "Показать" : "Скрыть"}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.submitBtnText}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.switchBtn} onPress={switchScreens}>
              <Text style={styles.switchBtnText}>Уже есть аккаунт? Войти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  fromWrapper: {
    width: "100%",
    height: 550,
    backgroundColor: "#ffffff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: "relative",
    alignItems: "center",
  },
  avatar: {
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
    alignSelf: "center",
  },
  plus: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: -12.5,
  },
  title: {
    color: "#212121",
    marginTop: 92,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  form: {
    display: "flex",
    width: "100%",
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    height: 50,
    color: "#BDBDBD",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: "#F6F6F6",
    padding: 16,
    marginBottom: 16,
  },
  passwordWrapper: {
    position: "relative",
  },
  showPassBtn: {
    position: "absolute",
    right: 20,
    bottom: 22.5,
    padding: 10,
  },
  submitBtn: {
    backgroundColor: "#FF6C00",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    borderRadius: 100,
    marginTop: 27,
  },
  submitBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#ffffff",
  },
  switchBtn: {
    alignItems: "center",
    marginTop: 16,
  },
  switchBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
});

export default RegistrationScreen;
