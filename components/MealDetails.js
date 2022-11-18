import { Text, View,StyleSheet } from "react-native";


function MealDetails(props){
return  <View style={[styles.details,props.style]}>
  <Text style={[styles.detailsItem,props.textStyle]}>{props.duration}minutes</Text>
  <Text style={[styles.detailsItem,props.textStyle]}>{props.complexity.toUpperCase()}</Text>
  <Text style={[styles.detailsItem,props.textStyle]}>{props.affordability.toUpperCase()}</Text>
</View>
}

export default MealDetails;
const  styles = StyleSheet.create({
  details:{
    flexDirection:'row',
    alignItems:'center',
    padding:8,
    justifyContent:'center'
  },
  detailsItem:{
    color:'black',
    marginHorizontal:4,
    fontSize:12,
  }
})
