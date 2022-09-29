import React from "react"
import { View, Text, StyleSheet } from "react-native"

const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailsItem}>{duration} min </Text>
      <Text style={styles.detailsItem}>{complexity.toUpperCase()} </Text>
      <Text style={styles.detailsItem}>{affordability.toUpperCase()} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
})

export default MealDetails
