import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase-config";
import { AuthContext } from "./AuthContext";

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
  dateOfDay: string;
  countDataMood: number;
  setCountDataMood: (newState: number) => void;
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
  dateOfDay: "",
  countDataMood: 0,
  setCountDataMood: () => {},
};

export const AppContext = createContext<ContextType>(initialValue);

//date of day
const date = new Date();
const options: {} = { weekday: "short", year: "numeric", month: "short", day: "2-digit" };
const dateOfDay = date.toLocaleDateString("fr-FR", options);

export function AppContextProvider({ children }: ChildrenProps) {
  //data firebase:
  useEffect(() => {
    dataFirebase();
  }, []);

  const [dataMood, setDataMood] = useState(initialValue.dataMood);

  function dataFirebase() {
    try {
      const q = query(collection(db, "mood"), orderBy("times", "desc"));
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

  //counter for useEffect loading data:
  const [countDataMood, setCountDataMood] = useState<number>(initialValue.countDataMood);

  return (
    <AppContext.Provider
      value={{
        dataMood,
        moodDataSelected,
        setMoodDataSelected,
        openEdit,
        setOpenEdit,
        dateOfDay,
        countDataMood,
        setCountDataMood,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
