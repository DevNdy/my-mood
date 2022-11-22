import { collection, getDocs } from "firebase/firestore";
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

  async function dataFirebase() {
    try {
      await getDocs(collection(db, "mood")).then((res) =>
        setDataMood(res.docs.map((doc) => ({ ...doc.data() })))
      );
    } catch (err) {
      console.log(err);
    }
  }

  return <AppContext.Provider value={{ dataMood }}>{children}</AppContext.Provider>;
}
