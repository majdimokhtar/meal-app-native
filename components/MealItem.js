import { useNavigation } from "@react-navigation/native"
import MealDetails from "./MealDetails"
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  Platform,
} from "react-native"

const MealItem = ({ id, title, imageUrl,duration,affordability,complexity }) => {
  const navigation = useNavigation()

  function selectMealItemHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    })
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.btnPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}> {title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    overflow: "hidden",
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },

  btnPressed: {
    opacity: 0.5,
  },
})

export default MealItem
