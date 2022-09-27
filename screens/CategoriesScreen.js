import { CATEGORIES } from "../data/data"
import { View, FlatList } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile"

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function PressHandler(){
      navigation.navigate("MealsOverview",
      {categoryId : itemData.item.id, }
      )
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={PressHandler}
      />
    )
  }
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  )
}
