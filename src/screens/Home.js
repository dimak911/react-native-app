import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen/PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Posts" component={PostsScreen} />
        <Tab.Screen name="CreatePosts" component={CreatePostsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
