import React from "react"
import { View, StyleSheet, Text } from "react-native"

const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText} >{dataPoint}</Text>
    </View>
  ))
}

const styles = StyleSheet.create({
    listItem :{
        borderRadius :6,
        paddingVertical : 4,
        paddingHorizontal : 8,
        marginVertical : 4,
        marginHorizontal : 12,
        backgroundColor :"#80ed99"
    },
    itemText :{
        color : "#22577a",
        textAlign : "center",
        fontSize :18,
        fontWeight :"bold"
    }
})

export default List
