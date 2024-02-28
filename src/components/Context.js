import React, { createContext, useState, useContext } from 'react';

const AppContext = React.createContext();


// Buat konteks untuk menyimpan token
const TokenContext = createContext();

// Buat komponen provider konteks untuk menyediakan token ke komponen-komponen di bawahnya
export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Inisialisasi token dengan null

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

// Buat hook untuk mengakses konteks token
export const useToken = () => useContext(TokenContext);


export default AppContext;