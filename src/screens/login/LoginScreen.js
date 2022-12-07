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

const bgImage = require("../../../assets/bg.jpeg");

const LoginScreen = ({ isShowKeyboard, setIsShowKeyboard }) => {
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
  };

  const switchScreens = () => {
    //
  };

  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View
          style={{
            ...styles.fromWrapper,
            transform: [{ translateY: isShowKeyboard ? 240 : 0 }],
          }}
        >
          <Text style={styles.title}>Войти</Text>
          <View style={styles.form}>
            <CustomTextInput
              onInputChange={onChangeEmail}
              value={email}
              placeholder={"Адрес электронной почты"}
              setIsShowKeyboard={setIsShowKeyboard}
            />
            <View style={styles.passwordWrapper}>
              <CustomTextInput
                onInputChange={onChangePassword}
                value={password}
                placeholder={"Пароль"}
                setIsShowKeyboard={setIsShowKeyboard}
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
              onPress={switchScreens}
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
