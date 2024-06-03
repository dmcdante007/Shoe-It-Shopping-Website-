
import { AppBar, FormControl, FormGroup, FormLabel } from "@mui/material";
import React from "react";
import { useRef } from "react";

const Header = () => {
  
  return (
    <>
    <AppBar sx={{height: '50px', textAlign: 'Center', fontSize: '50px', backgroundColor: 'grey', position: 'sticky', marginBottom: 2}} title="Shoe-It">Note-book</AppBar>

    </>
  );
};

export default Header;
