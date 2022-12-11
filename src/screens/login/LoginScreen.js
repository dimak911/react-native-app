import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import { CustomTextInput } from "../../components/Input/CustomInput";
import { styles } from "./StylesLoginScreen";
import { useAuthContext } from "../../hooks/useAuthContext";

const bgImage = require("../../../assets/bg.jpeg");

const LoginScreen = ({ navigation }) => {
  const { user, dispatch } = useAuthContext();
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);
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
      email,
      password,
    };

    console.log(data);

    dispatch({ type: "LOGIN", payload: { email } });
  };

  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View
          style={{
            ...styles.fromWrapper,
            transform: [{ translateY: isFocused ? 240 : 0 }],
          }}
        >
          <Text style={styles.title}>Войти</Text>
          <View style={styles.form}>
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
              <Text style={styles.submitBtnText}>Войти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.switchBtn}
              onPress={() => navigation.navigate("Registration")}
              activeOpacity={0.8}
            >
              <Text style={styles.switchBtnText}>
                Нет аккаунта? Зарегистрироваться
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginScreen;
