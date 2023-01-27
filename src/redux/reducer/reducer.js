import { ADD_FAVORITE, REMOVE_FAVORITE ,FILTER, ORDER } from "../actions/types.js";

const inicialState = {
  cards: {},
  characterSearch: "",
  myFavorites: [],
  allCharacters: []
}

const rootReducer = (state = inicialState, { type, payload }) => {

  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.myFavorites, payload]
      }
    case REMOVE_FAVORITE:
      const filteredList = state.myFavorites.filter((fav) => fav.id !== payload)
      return {
        ...state,
        myFavorites: filteredList,
        allCharacters: filteredList
      }
    case FILTER:      
      let filteredCharacters = state.allCharacters;
      if(payload !== "All"){
        filteredCharacters = state.allCharacters.filter((fav) => fav.gender === payload)
      }
      
      return {
        ...state,
        myFavorites: filteredCharacters
      }
    case ORDER:
      let orderCards = [];

      if (payload === "Ascendente") {
        orderCards = state.allCharacters.sort((a, b) => {
          if (a.id > b.id) {
            return 1
          }
          if (a.id < b.id) {
            return -1
          }
          return 0;
        });
      }

      if (payload === "Descendente") {
        orderCards = state.allCharacters.sort((a, b) => {
          if (a.id < b.id) {
            return 1
          }
          if (a.id > b.id) {
            return -1
          }
          return 0;
        });
      }
      return {
        ...state,
        myFavorites: orderCards
      }
    default:
      return { ...state }

  }

}

export default rootReducer;