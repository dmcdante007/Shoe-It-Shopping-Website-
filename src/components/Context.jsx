import React, { useState } from "react";

const ContextApi = React.createContext({
  open: "",
});

export const AuthContextProvider = (props) => {
  const [openState, setopenState] = useState(false);
  const [count, setCount] = useState(0)
  const handleOpen = () => {
    console.log("gitting clicket in context");
    setopenState(!openState);
  };

  const [arr, setArr] = useState([]);

  const setArrhandler = (e) => {
    setArr([...arr, e]);
    console.log(arr)
  };

  const totalNotes = (e)=>{
    setCount(e)
  };

  const values = {
    open: openState,
    handleOpen: handleOpen,
    TotalNotes: totalNotes,
    Showing: totalNotes,
    appendArr: setArrhandler,
    arrIs : arr,
    showThis: count,
  };

  return (
    <ContextApi.Provider value={{ values }}>
      {props.children}
    </ContextApi.Provider>
  );
};

export default ContextApi;
