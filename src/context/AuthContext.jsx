import React from "react";

const AuthContext = React.createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

export { AuthContext };

const AuthProvider = (props) => {
  const { children } = props;

  const [auth, setAuth] = React.useState(undefined);

  const login = (userData) => {
    setAuth(userData);
  };

  const logout = (userData) => {
    setAuth(undefined);
  };

  const valueContext = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };
