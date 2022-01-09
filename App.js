/*
* File: App.js
* Author: Rohrbacher Marcell
* Copyright: 2022, Rohrbacher Marcell
* Group: Szoft II/N
* Date: 2022-01-09
* Github: https://github.com/Marci971104
* A program egy pentagon területét számolja ki. 
*/


import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { TouchableHighlight } from 'react-native-web';

export default function App() {
  const[a,setA] = useState();
  const[areaPentaR,setarea2] = useState();

  function calcArea(){
      
      let areaPentaR=(Math.pow(a,2)*Math.sqrt(25+10*Math.sqrt(5,2)))/4 
      
      let result=areaPentaR;
      setarea2(Math.round(result*100)/100);
      
      
   
      
  }

  return (
    <View style={styles.flex1}>
      <Text style={styles.bevezeto}>
        Pentagon dolgozat 
              </Text>

    <View style={styles.container}>
      <Text style={styles.text}>A oldal</Text>
      <Text> </Text>
      
      <TextInput       
      style = {styles.input} 
      onChangeText={a => setA(a)}/>
      
     
      

<TouchableHighlight
          style={styles.runButton}
          onPress={calcArea}
          >
          <Text style={styles.runText}>Számolás</Text>
</TouchableHighlight>
 

     
      <Text style={styles.text}>Terület: {areaPentaR} cm2 </Text>
      <StatusBar style="auto" />
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:'15%', 
    flex: 2,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  TextInput:{
    color: 'white',
    
  },

  input:{
   
    borderWidth: 2,
    borderColor: 'black',
    height:'9%',
    borderColor:'white'
   
  },

  text:{
    fontSize:40,
    color:'white',
    fontFamily:'Courier New'
  },

  runButton: {
    backgroundColor: 'black',
    marginTop: 10,
    padding: 10,
    borderRadius: 3,

    
    },
  runText: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 24,
    fontFamily: 'arial-black',
    fontWeight:'bold',
   

  },
  flex1:{
    backgroundColor:'#303030',
    flex:1,
  
    justifyContent: 'center',
    marginRight:'25%'
    

  },
  bevezeto:{
    color:'white',
    fontSize:40,
    alignItems:'center',
    justifyContent: 'center'

  }
});