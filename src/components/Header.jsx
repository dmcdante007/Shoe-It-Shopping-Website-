import {
  Checkbox,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Grid,
  Input,
  TextField,
  FormControlLabel,
} from "@mui/material";
import React from "react";
import { useRef } from "react";

const Header = () => {
  const name = useRef();
  const desc = useRef();
  const price = useRef();
  const quality = useRef();

  const onClickHandler = (e) => {
    e.preventDefault();
    const obj1 = {
      name: name.current.value,
      desc: desc.current.value,
      price: price.current.value,
      quality: quality.current.value,
    };
    console.log(name.current.value);
  };

  return (
    <>
      <Container>
        <FormControl sx={{ display: "flex" }} onSubmit={onClickHandler}>
          <FormLabel htmlFor="shoeName"> ShoeName</FormLabel>
          <TextField id="shoeName" type="text" ref={name} />

          <FormLabel htmlFor="Desc">Description</FormLabel>
          <TextField id="Desc" type="text" ref={desc} />

          <FormLabel htmlFor="price">Price</FormLabel>
          <TextField id="price" type="number" ref={price} />

          <FormGroup>

            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="S"
             
            />
            <FormControlLabel
              control={<Checkbox />}
              label="M"
             
            />
            <FormControlLabel
              control={<Checkbox />}
              label="L"
              
            />
          </FormGroup>

          <button type="Submit">Add Product</button>
        </FormControl>
      </Container>
    </>
  );
};

export default Header;
