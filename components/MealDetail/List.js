import { Text, StyleSheet, View } from "react-native";

function List(props){
return  props.data.map((ingredients) =>(
  <View style={styles.listItems}  key={ingredients}>
    <Text style={styles.itemText}>{ingredients}</Text>
  </View>))
}

export default List;
const styles =StyleSheet.create({
  listItems:{
    borderRadius:6,
    paddingHorizontal :8,
    paddingVertical:4,
    marginVertical:4,
    marginHorizontal:12,
    backgroundColor:"#e2b497",
  },
  itemText:{
    color:'black',
    textAlign:'center',

  }
})
