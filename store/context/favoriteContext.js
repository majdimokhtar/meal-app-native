import { createContext,useState } from "react"

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
})

function FavoriteContextProvider({ children }) {
   const [favMealsIds,setFavMealsIds] =useState([])

   function addFavorite(id){
    setFavMealsIds((currentFavId)=>[...currentFavId,id])
   }
   function removeFavorite(id){
    setFavMealsIds((currentFavId)=> currentFavId.filter((mealId)=> mealId !==id ))
   }

   const value = {
    ids : favMealsIds,
    addFavorite :addFavorite,
    removeFavorite :removeFavorite
   }

  return <FavoritesContext.Provider value={value} >{children}</FavoritesContext.Provider>
}

export default FavoriteContextProvider
