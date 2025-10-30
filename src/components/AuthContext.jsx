import { createContext, useContext, useEffect, useState } from "react";
import { loginUser } from "../backend/api.js";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(()=>{
    const stored = localStorage.getItem("auth");
    if(stored) setAuth(JSON.parse(stored));
  },[]);
  const login = async (email, password) => {
    try{
        const data= await loginUser({email,password});
        setAuth(data);
        localStorage.setItem("auth",JSON.stringify(data));
        return true;
    } catch{
        return false;
    }
  };
  const logout = () => setAuth(null);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
