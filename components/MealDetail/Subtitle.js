import React from "react"
import { View, StyleSheet, Text } from "react-native"

const Subtitle = ({children}) => {
  return (
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    subtitle : {
        color :"#80ed99",
    
        fontWeight : "bold",
        fontSize :18,
        textAlign : "center",
    
      },
      subtitleContainer :{
        padding :6,
        borderBottomColor : "#80ed99",
        borderBottomWidth :2,
        margin :4,
        marginHorizontal : 12,
        marginVertical : 4
      }
})

export default Subtitle
