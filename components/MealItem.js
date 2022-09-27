import React from "react"
import { View, StyleSheet, Text, Pressable, Image, Platform } from "react-native"

const MealItem = ({ title,imageUrl,duration,complexity,affordability }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable 
      android_ripple={{color:"#ccc"}}
      style={({ pressed }) => 
        pressed ? styles.btnPressed : null
      }
      >
        <View >
            <Image source={{uri:imageUrl }} style={styles.image} />
          <Text style={styles.title} > {title}</Text>
        </View>
        <View style={styles.details} >
            <Text style={styles.detailsItem} >{duration} min </Text>
            <Text style={styles.detailsItem}>{complexity.toUpperCase()} </Text>
            <Text style={styles.detailsItem}>{affordability.toUpperCase()} </Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    mealItem :{
        margin : 16,
        borderRadius : 8,
        backgroundColor :"white",
        overflow : "hidden",
        elevation : 4,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    image :{
        width : "100%",
        height : 200
    },
    title :{
        fontWeight :"bold",
        textAlign :"center",
        fontSize : 18,
        margin :8
    },
    details:{
        flexDirection : "row",
        alignItems :"center",
        justifyContent :"center",
        padding : 8
    },
    detailsItem :{
        marginHorizontal :4,
        fontSize :12
    },
    btnPressed:{
        opacity: 0.5,
    }
})

export default MealItem
