import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => 
{

  return<View>
     <Text style={styles.text}>learning Reactnative</Text>;
     //using the button or Touchable opacity to navigate between screens
     <Button 
     onPress={() => navigation.navigate('Components')}
     title="Go to Components screen"
     />
     <TouchableOpacity onPress={()=> navigation.navigate('List')}>//This gives a faded out effect when a user clicks on it
      <Text>Go to List Screen</Text>
     </TouchableOpacity>
     <Button
     title="Go to Image screen"
     onPress={()=>navigation.navigate('List')}
     />
     <Button
     title="Go to CounterScreeen"
     onPress={()=>navigation.navigate('Counter')}
     />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
