import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { elementsThatOverlapOffsets } from "react-native/Libraries/Lists/VirtualizeUtils";
/*const ListScreen = ()=>
{
   const Friends=
   [
    //attributing keys to each object so that react native can keep track of each object ie defining a key property. This can also be done by  creating a prop in the Flatlist function ie a keyextractor
    {name: 'Friend #1'},
    {name: 'Friend #2'},
    {name: 'Friend #3'},
    {name: 'Friend #4'},
    {name: 'Friend #5'},
    {name: 'Friend #6'},
    {name: 'Friend #7'},
    {name: 'Friend #8'},
    {name: 'Friend #9'},
   ];
    return (
        <FlatList
        //props to display horizontally or vertically
        horizontal
        //hiding the scroll bar from the user
        showsHorizontalScrollIndicator={false}
        //creating a keyExtractor to help react keep track of objects in a list
        keyExtractor={(friend) =>friend.name}
        data ={Friends}
        renderItem={(item) =>{
          return <Text style={StyleSheet.textStyle}t>{item.name}</Text>;
        }
      }
       />
    )
};

const Style= StyleSheet.create({
    textStyle:
    {
        marginVertical:50
    }
});
export default ListScreen;*/

const ListScreen = ()=>
{
   const Friends=
   [
    {name:'Friend 1',Age: 'Age 20'},
    {name:'Friend 2',Age: 'Age 45'},
    {name:'Friend 3',Age: 'Age 32'},
    {name:'Friend 4',Age: 'Age 27'},
    {name:'Friend 5',Age: 'Age 53'},
    {name:'Friend 7',Age: 'Age 30'},
   ];
    return (
        <FlatList
        keyExtractor={Friends.name}
        data = {Friends}
        renderItem={(item)=>
            {
                return <Text>{item.name} - {item.Age}</Text>  
            }
        }
        />
    );
};
export default ListScreen;