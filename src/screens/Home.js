import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen/PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import { useAuthContext } from "../hooks/useAuthContext";

const BottomTab = createBottomTabNavigator();

export default function Home() {
  const { user, dispatch } = useAuthContext();

  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            size = 24;

            if (route.name === "Posts") {
              iconName = "grid";
            } else if (route.name === "CreatePosts") {
              iconName = "plus-circle";
            } else if (route.name === "Profile") {
              iconName = "user";
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "#212121",
        })}
      >
        <BottomTab.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            headerTitle: "Публикации",
            headerRight: () => (
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                onPress={() => dispatch({ type: "LOGOUT" })}
                style={{ marginRight: 16 }}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="CreatePosts"
          component={CreatePostsScreen}
          options={{ headerTitle: "Создать публикацию" }}
        />
        <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerTitle: "Профиль" }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
