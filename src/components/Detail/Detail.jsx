import Styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (

    <div className={Styles.containerDetail}>
      <NavLink to = "/">
      <h2>Home</h2>
      </NavLink>
      <h1>{character.name}</h1>
      <h3>{`Status: ${character.status}`}</h3>
      <h3>{`Specie: ${character.species}`}</h3>
      <h3>{`Gender: ${character.gender}`}</h3>
      <h3>{`Origin: ${character.origin?.name}`}</h3>
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default Detail;
