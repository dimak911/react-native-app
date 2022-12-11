import {
  ImageBackground,
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import { CustomTextInput } from "../../components/Input/CustomInput";
import { styles } from "./StylesRegistrationScreen";
import { useAuthContext } from "../../hooks/useAuthContext";

const bgImage = require("../../../assets/bg.jpeg");
const plusIcon = require("../../../assets/add.png");

const RegistrationScreen = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);
  const { user, dispatch } = useAuthContext();

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
    const data = {
      login,
      email,
      password,
    };

    console.log(data);
    dispatch({ type: "REGISTER", payload: { login, email } });
  };

  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View
          style={{
            ...styles.fromWrapper,
            transform: [{ translateY: isFocused ? 190 : 0 }],
          }}
        >
          <View style={styles.avatar}>
            <Image source={plusIcon} style={styles.plus} />
          </View>
          <Text style={styles.title}>Регистрация</Text>
          <View style={styles.form}>
            <CustomTextInput
              onInputChange={onChangeLogin}
              value={login}
              placeholder={"Логин"}
              setIsFocused={setIsFocused}
            />
            <CustomTextInput
              onInputChange={onChangeEmail}
              value={email}
              placeholder={"Адрес электронной почты"}
              setIsFocused={setIsFocused}
            />
            <View style={styles.passwordWrapper}>
              <CustomTextInput
                onInputChange={onChangePassword}
                value={password}
                placeholder={"Пароль"}
                setIsFocused={setIsFocused}
                secureTextEntry={passwordIsHidden}
              />
              <TouchableOpacity
                style={styles.showPassBtn}
                onPress={onShowPassBtn}
                activeOpacity={0.8}
              >
                <Text>{passwordIsHidden ? "Показать" : "Скрыть"}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={handleSubmit}
              activeOpacity={0.8}
            >
              <Text style={styles.submitBtnText}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.switchBtn}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.switchBtnText}>Уже есть аккаунт? Войти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default RegistrationScreen;
