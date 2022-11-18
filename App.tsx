import Icon from "react-native-ionicons";
import 'react-native-gesture-handler';
import React, { type PropsWithChildren } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import Category from "./models/category";
import CategoriesScreen from "./screen/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screen/MealsOverviewScreen";
import MealsDetailScreen from "./screen/MealsDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screen/FavoritesScreen";
import FavoritesContextProvider from "./store/context/favorites-context";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()
function DrawerNavigator(){
  return <Drawer.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: "#351401",
    },
    headerTintColor: "white",
    drawerInactiveTintColor:'white',
    drawerActiveTintColor:'#351401',
    drawerActiveBackgroundColor:'#e4baa1',
    drawerContentStyle:{ backgroundColor:'#3f2f25'},
    sceneContainerStyle: { backgroundColor: "#351401", }
  }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
      title:'All Categories',
      drawerIcon :({color,size}) =>
        <Icon name='list' size={size} color={color}/>

    }} />
    <Drawer.Screen name="Favorites"  component={FavoritesScreen} options={{
    drawerIcon: ({color,size}) =>
      <Icon name={"star"} color={color} size={size}/>
    }
    }/>
  </Drawer.Navigator>
}

const App = () => {


  return (
    <View style={styles.main}>
      {/*<StatusBar style={'light'} />*/}
      <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: "#351401",
          },
          headerTintColor: "white",
          contentStyle: {
            backgroundColor: "#351401",
          },
        }}>
          <Stack.Screen options={{
            headerShown:false,
          }} name="Drawer" component={DrawerNavigator} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name='MealsDetail' component={MealsDetailScreen} options={{
            title :'About the Meal',
          }}/>
        </Stack.Navigator>

      </NavigationContainer>
      </FavoritesContextProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#24180f",
  },
});

export default App;
