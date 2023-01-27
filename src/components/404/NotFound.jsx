import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <NavLink to="/">
        <h1>404 Not Found</h1>
      </NavLink>
    </div>
  );
};

export default NotFound;
