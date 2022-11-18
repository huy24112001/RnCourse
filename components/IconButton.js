import { Pressable, StyleSheet, View } from "react-native";


import Icon from "react-native-vector-icons/FontAwesome";



function IconButton(props){
return <Pressable style={({pressed}) => pressed && styles.pressed} onPress={props.onPress}>
<Icon name={props.icon} size={26} color = {props.color} />
  </Pressable>
}

export default IconButton;
const styles = StyleSheet.create({
  pressed:{
    opacity:0.7
  }
})
