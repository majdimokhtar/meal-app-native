import React from "react"
import { Text, StyleSheet, View, Image } from "react-native"
import MealDetails from "../components/MealDetails"
import { MEALS } from "../data/data"

const MealDetailScreen = ({ route }) => {
  // mealId from mealItem params
  const mealId = route.params.mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  return (
    <View>
      <Image source={{uri: selectedMeal.imageUrl}} />
      <Text>{selectedMeal.title}  </Text>
      <MealDetails
      duration={selectedMeal.duration}
      complexity={selectedMeal.complexity}
      affordability={selectedMeal.affordability}
      />
      <Text>Ingridients</Text>
      {selectedMeal.ingredients.map((ingridient)=>
      <Text key={ingridient} >{ingridient}</Text>
      )}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step)=>
      <Text key={step} >{step}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({})

export default MealDetailScreen
