import Card from "../Card/Card";
import Styles from "./Cards.module.css"


export default function Cards({ characters,onClose }) {
  
  return (
    <div className={Styles.containerGrid}>
      {characters.map((Character) => (
        <Card 
        key = {Character.id}
        id = {Character.id}
        name={Character.name}
        species={Character.species}
        gender={Character.gender}
        image={Character.image}
        onClose={onClose}
        />
      ))}
    </div>
  );
}
