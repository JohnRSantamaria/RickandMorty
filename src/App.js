import './App.css'
import Nav from './components/Navigation/Nav';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import NotFound from './components/404/NotFound';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites.jsx';

import { useState, useEffect } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';


function App() {

  
  const [characters, setCharacters] = useState([]);
  const [listNum, setListNum] = useState([]);
  //Ingreso de seguridad para el app
  const [access, setAccess] = useState(false); //Needs to be change to False 
  const username = ''//'johnsantamaria@hotmai.com';
  const password = ''//'password1';
  const navigate = useNavigate();

  

  const onSearch = (character) => {

    if (!listNum.includes(character)) {

      setListNum([
        ...listNum,
        character
      ])

      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
        });
    }
  }

  const onClose = (id) => {
    const filteredList = characters.filter((character) => character.id !== id);
    const filteredListNum = listNum.filter((list) => parseInt(list) !== parseInt(id));

    setListNum(filteredListNum);
    setCharacters(filteredList);

  }

  const login = (userData)=> {
    if( userData.password === password && userData.username === username ){
      setAccess(true);
    }
  }

  const logout = ()=> {
    setAccess(false);
    setCharacters([]);
    setListNum([]);
  }
  //
  useEffect(() => {
    !access && navigate("/")
  }, [access,navigate]);  
  
  return (
    <div className='App'>      
       
      
      {access? <Nav onSearch={onSearch}  logout = {logout}/> : null}

      <Routes>
        <Route
          path='/'
          element={
            access ? (
            <Cards
              characters={characters}
              onClose={onClose}
            />
            ) : (
              <Form login = {login}/>
            )
          }
        />
        <Route
          path='/about'
          element={<About/>}
        />
        
        <Route
          path='/favorites'
          element={<Favorites/>}
        />

        <Route
          path='/detail/:detailId'
          element={<Detail/>}
        />
        <Route
          path='*'
          element={<NotFound/>}
        />

      </Routes>
    </div>
  )
}

export default App;
