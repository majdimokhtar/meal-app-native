import { View, StyleSheet, FlatList } from "react-native"
import MealItem from "./MealItem"
const MealsList = ({ items }) => {
  function renderMealItem(itemData) {
    const item = itemData.item
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      id: item.id,
    }
    return <MealItem {...mealItemProps} />
  }
  return (
    <View style={styles.Container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 16,
  },
})

export default MealsList
