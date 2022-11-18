import { Text, View,StyleSheet } from "react-native";

function Subtitle(props){
return  <View style={styles.subtitlecontainer}>
  <Text style={styles.subtitle}>{props.title}</Text>
</View>
}

export default Subtitle;
const styles = StyleSheet.create({
  subtitle:{
    color:'#e2b497',
    fontSize: 18,
    fontWeight:'bold',
    textAlign: 'center',
  },
  subtitlecontainer:{
    borderBottomColor : "#e2b497",
    borderBottomWidth :2,
    margin:4,
    padding :6,
    marginHorizontal: 12,
    marginVertical: 4
  }
})
