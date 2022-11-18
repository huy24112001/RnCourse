import { CATEGORIES, MEALS } from "../data/dummy-data";
import { Text, View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealsList/MealItem";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

function MealsOverviewScreen({ route, navigation }) {

  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((items) => {
    return items.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId,
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const mealItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUri: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };


function onPress(){
  navigation.navigate('MealsDetail',{
    mealId: mealItemProps.id,
  })
}

    return <MealItem onPress={onPress} mealsItem={mealItemProps} />;
  }

  return <View style={styles.container}>
    <FlatList data={displayMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
  </View>;
}

export default MealsOverviewScreen;
const styles = StyleSheet.create({
  container: {},
});
