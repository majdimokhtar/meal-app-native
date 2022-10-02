import React from "react"
import { useLayoutEffect, useContext } from "react"
import { Text, StyleSheet, ScrollView, Image, View, Button } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import IconBton from "../components/IconBton"
import List from "../components/MealDetail/List"
import Subtitle from "../components/MealDetail/Subtitle"
import MealDetails from "../components/MealDetails"
import { MEALS } from "../data/data"
import { addFavorite, removeFavorite } from "../store/redux/favorites"
// import { FavoritesContext } from "../store/context/favoriteContext"

const MealDetailScreen = ({ route, navigation }) => {
  // const favoriteMealContext = useContext(FavoritesContext)
  const favoriteMealsIds = useSelector((state)=> state.favoriteMeals.ids)
  const dispatch = useDispatch()

  // mealId from mealItem params
  const mealId = route.params.mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  const mealIsFav = favoriteMealsIds.includes(mealId)

  function changeFavHandler() {
    if (mealIsFav) {
      // favoriteMealContext.removeFavorite(mealId)
      dispatch(removeFavorite({ id: mealId }))
    } else {
      // favoriteMealContext.addFavorite(mealId)
      dispatch(addFavorite({ id: mealId }))
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Button
            onPress={changeFavHandler}
            title={mealIsFav ? "Favorite" : "not Fav"}
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
