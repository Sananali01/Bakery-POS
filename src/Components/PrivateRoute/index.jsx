// import React from "react";
// import { Navigate } from "react-router-dom";
// import { UserAuthContext } from "../../App";
// import login from "../../Pages/Login";
// import { useContext } from "react";
// const PrivateRoute = ({ user }) => {
//   const isAuth = useContext(UserAuthContext).isAuth;

//   return <>{isAuth ? user : <Navigate to="/login" />}</>;
// };

// export default PrivateRoute;
import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuthContext } from "../../App";
import PropTypes from "prop-types";

import { useContext } from "react";
const PrivateRoute = ({ children }) => {
  const isAuth = useContext(UserAuthContext);

  return <>{isAuth.userAuth ? children : <Navigate to="/login" />}</>;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
PrivateRoute.defaultProps = {
  children: <></>,
};
export default PrivateRoute;
