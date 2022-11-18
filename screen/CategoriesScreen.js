import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";



function CategoriesScreen(props){

  function renderCategoryItem(itemData){
    function HandlerScreen(){
      props.navigation.navigate('MealsOverview',{
        categoryId : itemData.item.id,
      })
    }
      return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={HandlerScreen} />
  }

return <FlatList data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={renderCategoryItem} numColumns={2}/>
}

export default CategoriesScreen;
