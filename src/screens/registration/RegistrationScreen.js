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

const bgImage = require("../../../assets/bg.jpeg");
const plusIcon = require("../../../assets/add.png");

const RegistrationScreen = ({ isShowKeyboard, setIsShowKeyboard }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);

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
            transform: [{ translateY: isShowKeyboard ? 190 : 0 }],
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
              setIsShowKeyboard={setIsShowKeyboard}
            />
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
              <Text style={styles.submitBtnText}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.switchBtn}
              onPress={switchScreens}
              activeOpacity={0.8}
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
