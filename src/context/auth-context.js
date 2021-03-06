import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tokenKey } from "../config";
import * as auth from "../services/auth-service";
import { getUser, createUser, updateUser } from "../services/user-service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getUser().then((u) => {
      setTimeout(() => {
        setUser(u);
        setIsLoading(false);
      }, 500)
    }
    ).catch((error) => {
      console.error(error);
      setIsLoading(false);
    }
    );
  }, []);

  function login(credentials) {
    auth.login(credentials).then((data) => {
      setUser(data);
      navigate("/search")
    }).catch((error) => setError(error.message));
  };

  function logout() {
    auth.logout().then(() => {
      sessionStorage.removeItem(tokenKey);
      setUser(null);
      navigate("/");
    });
  };

  function signup(userData) {
    createUser(userData).then((data) => {
      setUser(data);
      navigate("/search")
    }).catch((error) => setError(error.message));
  };

  function update(userData) {
    updateUser(userData).then(setUser).catch((error) => setError(error.message));
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        isLoading,
        login,
        update,
        logout,
        signup
      }}
    >
      { children }
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
