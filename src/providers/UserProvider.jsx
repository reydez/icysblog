import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState, createContext } from "react";
import { auth } from "../service/firebase";
export const UserContext = createContext({ user: null });

export default (props) => {
  const [currentUser, setCurrentUserUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, setCurrentUserUser);
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
