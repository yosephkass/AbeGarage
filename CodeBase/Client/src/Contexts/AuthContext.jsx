import React, { useEffect, useContext, useState } from "react";
import employeeAuthHeader from "../util/auth.header";

// create AuthContext
export const AuthContext = React.createContext();

// Create the AuthProvider
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [employee, setEmployee] = useState({});

  const value = { isLogged, isAdmin, setIsAdmin, setIsLogged, employee };

  useEffect(() => {
    // retrieving data from browser local database
    const fetchToken = async () => {
      const isEmployee = await employeeAuthHeader();
      // console.log(isEmployee);
      if (isEmployee) {
        setIsLogged(true);
        setEmployee(isEmployee);
        if (isEmployee.employee_role === "Admin") {
          setIsAdmin(true);
        }
      }
    };
    fetchToken();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Export the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
