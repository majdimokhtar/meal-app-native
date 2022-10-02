import { useContext } from "react"
import { Text, View, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import MealsList from "../components/MealList/MealsList"
import { MEALS } from "../data/data"
import { FavoritesContext } from "../store/context/favoriteContext"

const FavScreen = () => {
  // const favoriteMealContext = useContext(FavoritesContext)
  const favMealIds = useSelector((state)=>state.favoriteMeals.ids)
  const favMeals = MEALS.filter((meal) =>
  favMealIds.includes(meal.id)
  )
  if (favMeals.length === 0) {
    return (
      <View style={styles.rootContainer} >
        <Text style={styles.text}>No Favorite Meal yet</Text>
      </View>
    )
  }
  return <MealsList items={favMeals} />
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize : 24,
    color :"white"
  },
})

export default FavScreen
