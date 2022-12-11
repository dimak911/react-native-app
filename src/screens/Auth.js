import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "../screens/Registration/RegistrationScreen";
import LoginScreen from "../screens/Login/LoginScreen";

const AuthStack = createNativeStackNavigator();

export default function Auth() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
