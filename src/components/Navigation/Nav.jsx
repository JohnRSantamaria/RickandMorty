import React from "react";

import Styles from "./Nav.module.css";

import SearchBar from "../SearchBar/SearchBar";

import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    const { onSearch, logout } = this.props;

    const handleClick = () => {
      logout();
    };
    return (
      <div className={Styles.navigationContainer}>
        <div className={Styles.searchBar}>
          <SearchBar onSearch={onSearch} />
        </div>
        <div className={Styles.links}>
          <NavLink to="./">Home</NavLink>
          <NavLink to="./about">About</NavLink>
          <NavLink to="./favorites">Favorites</NavLink>
        </div>
        <div className={Styles.logout}>
          <button onClick={handleClick}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Nav;


