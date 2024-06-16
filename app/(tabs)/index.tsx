import { Image, StyleSheet, Platform, View, Text, Button, Alert,TouchableOpacity } from 'react-native';
import React from 'react';

interface FunButtonProps {
  name: string; // Define the type of 'name' prop
}
const FunButton:React.FC<FunButtonProps> =({name})=>{
  return (
    <View style={{
      height:58,  
      width: 290, 
      //color: 'black', 
      //marginStart:30, 
      // marginTop:10, 
      //fontSize:20,
      //fontWeight :'700'
    }}>
      <Button 
      title={name} />
    </View>
  )
}

export default function HomeScreen() {
  return (
    <View style={{
      height:178,  
      width: 290, 
      //color: 'black', 
      marginStart:30, 
      marginTop:50, 
      //fontSize:20,
      //fontWeight :'700'
    }}>
      <FunButton name={"chintu"}></FunButton>
      <FunButton name={"pintu"}></FunButton>


      
      <TouchableOpacity style={style.button}
        
      onPress={() => Alert.alert('hi , i am here ')}>
        <Text style={{
          color:'white',
        }}> press me</Text>
      </TouchableOpacity>



      <Text style={{
        color:'black',
        fontSize:20,
        fontWeight :'700'
      }} 
        > 
          Hello  world
        </Text>
    </View>
  );
}

const style = StyleSheet.create({
  button:{
    backgroundColor:"black",
    padding: 10,
    borderRadius:5,
    display:'flex',
    alignItems:'center'
  }
})