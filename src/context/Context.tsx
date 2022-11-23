import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase-config";

interface ChildrenProps {
  children: React.ReactNode;
}

type ContextType = {
  dataMood: any;
  moodDataSelected: {
    date: string;
    id: string;
    email: string;
  };
  setMoodDataSelected: (newSate: any) => void;
  openEdit: boolean;
  setOpenEdit: (newState: boolean) => void;
};

const initialValue = {
  dataMood: [{}],
  moodDataSelected: {
    date: "",
    id: "",
    email: "",
  },
  setMoodDataSelected: () => {},
  openEdit: false,
  setOpenEdit: () => {},
};

export const AppContext = createContext<ContextType>(initialValue);

export function AppContextProvider({ children }: ChildrenProps) {
  //data firebase:
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

  //moodDataSelected:
  const [moodDataSelected, setMoodDataSelected] = useState(initialValue.moodDataSelected);

  //openEdit
  const [openEdit, setOpenEdit] = useState<boolean>(initialValue.openEdit);

  return (
    <AppContext.Provider
      value={{ dataMood, moodDataSelected, setMoodDataSelected, openEdit, setOpenEdit }}
    >
      {children}
    </AppContext.Provider>
  );
}
