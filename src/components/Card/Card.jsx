import { useState, useEffect } from "react";

import { connect } from "react-redux";

import Style from "./Card.module.css";
import { Link } from "react-router-dom";

import { addFavorite, removeFavorite } from "../../redux/actions/actions.js";

export function Card(props) {
  
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFavorite(props.id)
    }
    else{
      setIsFav(true);
      props.addFavorite(props);

    }    
  };

  useEffect(()=>{
    props.myFavorites.forEach((fav)=> {
      if(fav.id === props.id){
        setIsFav(true);
      };
    });
  },[props.myFavorites, props.id])

  return (
    <article className={Style.cardContainer}>
      <div className={Style.cardImg}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={Style.cardInf}>
        <button
          onClick={() => {
            props.onClose(props.id);
          }}
        >
          X
        </button>
        <Link to={`/detail/${props.id}`}>
          <h5 className="card-title">{props.name}</h5>
        </Link>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
    </article>
  );
}

export function mapStateToProps (state){
  return{
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorite: function (character) {
      dispatch(addFavorite(character));
    },
    removeFavorite: function (id) {
      dispatch(removeFavorite(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
