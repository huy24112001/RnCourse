import { Image, Pressable, Text, View,StyleSheet } from "react-native";
import MealDetails from "../MealDetails";

function MealItem(props){
  return <View style={styles.mealItem}>
    <Pressable android_ripple={{color:'#ccc'}} onPress={props.onPress}>
    <View>
    <Image style={styles.image} source={{uri: props.mealsItem.imageUri }}/>
    <Text style={styles.title}>{props.mealsItem.title}</Text>
  </View>
   <MealDetails duration={props.mealsItem.duration}
                complexity={props.mealsItem.complexity}
                affordability={props.mealsItem.affordability}

   />
  </Pressable>
  </View>
}

export default MealItem;
const styles = StyleSheet.create({
  mealItem:{
    margin:16,
    borderRadius:8,
    overflow:'hidden',
    backgroundColor:'white',
    elavation:4,
  },
  image:{
    width:'100%',
    height:200,
  },
  title:{
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:18,
    margin:8,
  },

})
