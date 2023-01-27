import { ADD_FAVORITE,REMOVE_FAVORITE, FILTER, ORDER  } from "./types";

export function addFavorite (character) {
  return{
    type: ADD_FAVORITE,
    payload: character
  }
}

export function removeFavorite (id){
  return{
    type: REMOVE_FAVORITE,
    payload: id
  }
}

export function filterCards(status){
  return{
    type: FILTER,
    payload: status
  }
}

export function orderCards(id){
  return{
    type:ORDER,
    payload: id
  }
}

export function getPost(){
  return{
    type: 'GET_POST'
  }
}




