import { useLayoutEffect } from "react"
import { MEALS, CATEGORIES } from "../data/data"
import MealsList from "../components/MealList/MealsList"

const MealsOverViewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0
  })
// fix navigation bug
  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title
    navigation.setOptions({
      title: categoryTitle,
    })
  },[catId,navigation])
return( <MealsList items={displayMeals} /> )

}



export default MealsOverViewScreen
