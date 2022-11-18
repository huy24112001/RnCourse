import { Image, Text, View, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import React, { useContext, useLayoutEffect } from "react";
import navigationContainer from "@react-navigation/native/src/NavigationContainer";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealsDetailScreen({ route,navigation }) {


  const favoriteMealCtx = useContext(FavoritesContext)
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealCtx.ids.includes(mealId)


  function headerBtn(){
  if(mealIsFavorite){
    favoriteMealCtx.removeFavorite(mealId);
  }
  else {
    favoriteMealCtx.addFavorite(mealId);
  }
  }

  useLayoutEffect(()=>{
    navigation.setOptions(  {
      headerRight: () => {
        return <IconButton onPress={headerBtn}  color='white' icon = {mealIsFavorite ? 'star' : 'star-outline'} />
      }
    })
  },[navigation,headerBtn])

  return <ScrollView style={styles.rootContainer}>
    <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
    <Text style={styles.title}>{selectedMeal.title}</Text>
    <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity}
                 affordability={selectedMeal.affordability}
                 textStyle={styles.detailsText}
    />
    <View style={styles.listOuterContainer}>
    <View style={styles.listContainer}>
    <Subtitle title = 'Ingredients'/>
    <List data={selectedMeal.ingredients}/>
    <Subtitle title = 'Steps'/>
    <List data={selectedMeal.steps}/>
    </View>
    </View>
  </ScrollView>;
}

export default MealsDetailScreen;
const styles =StyleSheet.create({
  rootContainer:{
    marginBottom:32
  },
  image:{
    width :'100%',
    height : 350,

  },
  title:{
    fontWeight:'bold',
    fontSize :24,
    margin:8,
    textAlign : 'center',
    color:'white'
  },
  detailsText:{
    color:'white'
  },
  listContainer:{
    width:'80%',

  },
  listOuterContainer:{
    alignItems :'center'
  }

})
