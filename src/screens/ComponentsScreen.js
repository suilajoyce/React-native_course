import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
//creating a component
/*const ComponentsScreen = () =>
{
    //creating a variable then using it in a text element
    const greeting = 'hello there';
    //creating a variable and giving it a JSX code then using it in a text file
    const greetingjsx=<Text>hello there</Text>
    return
    (
    <View>
        <Text style={styles.textStyle}>This is the Components screen</Text> 
        <Text>{greeting}</Text>
        {greetingjsx}
    </View>
    )
};
//creating a style component for style management
const styles=StyleSheet.create
(
    {
        textStyle:
        {
            fontSize: 30
        }
    }
);
export default ComponentsScreen;*/
const ComponentsScreen = ()=>
{
    const Myname= 'Chin Suila Joyce'
    return<View>
        <Text style={styles.text1}>Getting started with React native!</Text>
        <Text style={styles.text2}>My name is {Myname}</Text>
    </View>
};
const styles =StyleSheet.create(
    {
        text1:
        {
            fontSize:45
        },
        text2:
        {
            fontSize:20
        }

    }
);
export default ComponentsScreen;