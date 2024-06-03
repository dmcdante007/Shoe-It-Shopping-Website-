import React, { useState, useContext } from "react";
import ModalIs from "./Modal";
import ContextApi from "./Context";


const NoteForm = () => {
    const ctx = useContext(ContextApi);

  return (
    <>
      <label>Search Notes: </label>
      <input id="note" type="text" placeholder="search using notes" />
      <p>Total Notes: {ctx.values.showThis}</p> 
      <p>Showing: {ctx.values.showThis}</p>
      <button onClick={ctx.values.handleOpen}> Add New Note </button>

        <ModalIs></ModalIs>

        
    </>
  );
};

export default NoteForm;
