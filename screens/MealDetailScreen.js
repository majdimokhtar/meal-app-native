import React from "react"
import { useLayoutEffect,useContext } from "react"
import { Text, StyleSheet, ScrollView, Image, View, Button } from "react-native"
import IconBton from "../components/IconBton"
import List from "../components/MealDetail/List"
import Subtitle from "../components/MealDetail/Subtitle"
import MealDetails from "../components/MealDetails"
import { MEALS } from "../data/data"
import { FavoritesContext } from "../store/context/favoriteContext"

const MealDetailScreen = ({ route, navigation }) => {
  const favoriteMealContext = useContext(FavoritesContext)
  // mealId from mealItem params
  const mealId = route.params.mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  const mealFavorite = favoriteMealContext.ids.includes(mealId)

  function changeFavHandler() {
    if(mealFavorite){
      favoriteMealContext.removeFavorite(mealId)
    } else {
      favoriteMealContext.addFavorite(mealId)
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Button
            onPress={changeFavHandler}
            title={mealFavorite ? "Favorite" : "not Fav"}
          />
        )
      },
    })
  }, [navigation, changeFavHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title} </Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailTextStyle}
      />

      <View style={styles.listOuter}>
        <View style={styles.listContainer}>
          <Subtitle>Ingridients</Subtitle>

          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 320,
  },
  title: {
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    fontSize: 24,
    color: "white",
  },
  detailTextStyle: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuter: {
    alignItems: "center",
  },
})

export default MealDetailScreen
