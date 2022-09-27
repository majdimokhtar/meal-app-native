import { View, StyleSheet, FlatList, Text } from "react-native"
import MealItem from "../components/MealItem"
import { MEALS } from "../data/data"

const MealsOverViewScreen = ({ route }) => {
  const catId = route.params.categoryId
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0
  })
  function renderMealItem(itemData) {
    const item = itemData.item
    const mealItemProps = {
      title: item.title,
      imageUrl :item.imageUrl,
      duration :item.duration,
      complexity : item.complexity,
      affordability :item.affordability
    }
    return (
      <MealItem {...mealItemProps} />
    )
  }
  return (
    <View style={styles.title}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    padding: 16,
  },
})

export default MealsOverViewScreen
