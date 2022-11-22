import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase-config";

interface ChildrenProps {
  children: React.ReactNode;
}

type ContextType = {
  dataMood: any;
};

const initialValue = {
  dataMood: [{}],
};

export const AppContext = createContext<ContextType>(initialValue);

export function AppContextProvider({ children }: ChildrenProps) {
  useEffect(() => {
    dataFirebase();
  }, []);

  const [dataMood, setDataMood] = useState(initialValue.dataMood);

  function dataFirebase() {
    try {
      const q = query(collection(db, "mood"), orderBy("date"));
      onSnapshot(q, (snapshot) => {
        setDataMood(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    } catch (err) {
      console.log(err);
    }
  }

  return <AppContext.Provider value={{ dataMood }}>{children}</AppContext.Provider>;
}
