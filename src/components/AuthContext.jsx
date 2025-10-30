import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, getMe, refreshAccesToken } from "../backend/api.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  
  useEffect(() => {
    const checkAuth = async () => {
      const stored = localStorage.getItem("auth");
      if (!stored) return;

      const parsed = JSON.parse(stored);

      try {
        const res = await getMe(parsed.accessToken);
        setAuth({ ...parsed, user: res.user });
      } catch {
        try {
          const newToken = await refreshAccesToken(parsed.refreshToken);
          const updatedAuth = { ...parsed, accessToken: newToken.accessToken };
          setAuth(updatedAuth);
          localStorage.setItem("auth", JSON.stringify(updatedAuth));
        } catch {
          setAuth(null);
          localStorage.removeItem("auth");
        }
      }
    };

    checkAuth();
  }, []);

  
  useEffect(() => {
    if (!auth) return; 
    const interval = setInterval(async () => {
      try {
        const newToken = await refreshAccesToken(auth.refreshToken);
        const updatedAuth = { ...auth, accessToken: newToken.accessToken };
        setAuth(updatedAuth);
        localStorage.setItem("auth", JSON.stringify(updatedAuth));
        console.log("Access token refreshed automatically");
      } catch {
        console.log("Refresh failed, logging out");
        setAuth(null);
        localStorage.removeItem("auth");
      }
    }, 15 * 60 * 1000); 

    return () => clearInterval(interval); 
  }, [auth]);

  const login = async (email, password) => {
    try {
      const data = await loginUser({ email, password });
      setAuth(data);
      localStorage.setItem("auth", JSON.stringify(data));
      return true;
    } catch {
      return false;
    }
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
