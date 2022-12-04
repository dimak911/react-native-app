import { StyleSheet } from "react-native";
import RegistrationScreen from "./src/screens/registration/RegistrationScreen";

export default function App() {
  return <RegistrationScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
