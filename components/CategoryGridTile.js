import { Pressable, Text, View ,StyleSheet} from "react-native";

function CategoryGridTile(props){
return <View style={[styles.gridItem,{ backgroundColor : props.color}]}>
  <Pressable onPress={props.onPress} android_ripple={{color:'#ccc'}} style={styles.btn}>
    <View style={styles.items}><Text>
      {props.title}
    </Text></View>
  </Pressable>
</View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem:{
    flex:1,
    height:150,
    margin:15,
    borderRadius:5,
    borderWidth:2,
    borderColor:'#FFFFFF',
    elevation:5
  },
  items:{
    flex:1,
     justifyContent:'center',
    alignItems:'center',

  },
  btn:{
    flex:1
  }
})
