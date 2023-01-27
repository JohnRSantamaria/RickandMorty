import React from "react";
import { connect } from "react-redux";
import Cards from "../Cards/Cards";
import { useDispatch} from "react-redux";
import { orderCards, filterCards } from "../../redux/actions/actions";

const Favorites = ({ myFavorites}) => {

  
  const dispatch = useDispatch();
  
  const handleFilter = (e)=> {
    dispatch(filterCards(e.target.value))
  }
  
  const handleOrder = (e)=> {
    dispatch(orderCards(e.target.value))
  }
  


  return (
    <div>
      <select onChange={handleOrder}>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <select onClick={handleFilter}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <Cards characters={myFavorites}></Cards>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);

