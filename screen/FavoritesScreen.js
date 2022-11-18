import { View, Text, StyleSheet, FlatList } from "react-native";
import { useContext } from 'react';


import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import MealItem from "../components/MealsList/MealItem";

function FavoritesScreen() {
 const favoriteMealsCtx = useContext(FavoritesContext);

 const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
 );

 if (favoriteMeals.length === 0) {
  return (
    <View style={styles.rootContainer}>
     <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  );
 }

 function renderMealItem(itemData) {
  const mealItemProps = {
   id: itemData.item.id,
   title: itemData.item.title,
   imageUri: itemData.item.imageUrl,
   duration: itemData.item.duration,
   complexity: itemData.item.complexity,
   affordability: itemData.item.affordability,
  };
  return <MealItem mealsItem={mealItemProps} />;
 }


 return  <View style={styles.container}>
  <FlatList
    data={favoriteMeals}
    keyExtractor={(item) => item.id}
    renderItem={renderMealItem}
  />
 </View>
}

export default FavoritesScreen;

const styles = StyleSheet.create({
 rootContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
 text: {
  fontSize: 18,
  fontWeight: 'bold',
  color: 'white',
 },
 container: {

 },
});
