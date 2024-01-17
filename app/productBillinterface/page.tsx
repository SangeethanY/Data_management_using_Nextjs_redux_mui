"use client";
import { Box, Button, List, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import Formcontroller from "../reuseable/formcontroller";

export default function Salesproductlist() {
  type FormValues = {
    Name: string;
    Purchase: string;
    Price: number;
    Date: string;
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();
  return (
    <Box
      sx={{
        width: "50%",
        gap: "1rem",
        flexDirection: "column",
        display: "flex",
      }}>
      <Box
        sx={{
          height: "25rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "1rem",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          overflowY: "scroll",
        }}
        className="cards_scroll">
        <form
          onSubmit={handleSubmit((data) => {
            console.log("customerform",data);
          })}>
          <Typography color={"#bf74cb"} variant="h6">
            File to Earn More
          </Typography>
<List>
          <Formcontroller
            control={control}
            name="Name"
            rules={{
              required: "Email Address is required",
            }}
           
          />
          </List>
          <List>
          <Formcontroller
            control={control}
            name="Purchase"
            rules={{ required: "need purchase" }}
         
          />
          </List>
          <List>
          <Formcontroller
            name="Price"
            typeField={true}
            control={control}
            rules={{ required: "need" }}
        
          />
          </List>
           <List>
          <Formcontroller
            control={control}
            name="Date"
            rules={{ required: "need date" }}
       
            datePicker={true}
          />
          </List>
          <Button type="submit" variant="contained" size="small" fullWidth>
            Save
          </Button>
        </form>
      </Box>
      <Link style={{ alignSelf: "flex-end" }} href={"/salesproductlist"}>
        Click to see all Customer list
      </Link>
    </Box>
  );
}
