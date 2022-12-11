import { Button, Text, View } from "react-native";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function PostsScreen() {
  const { user, dispatch } = useAuthContext();

  return (
    <View>
      <Text>PostsScreen</Text>
      <Button
        title="Log out"
        onPress={() => {
          dispatch({ type: "LOGOUT" });
        }}
      />
    </View>
  );
}
