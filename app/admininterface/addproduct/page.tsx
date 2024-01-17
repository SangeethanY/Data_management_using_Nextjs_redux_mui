"use client";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Drawermodule from "@/app/reuseable/drawer";
import Formcontroller from "@/app/reuseable/formcontroller";
import { useSelector,useDispatch } from "react-redux";
import{addProductdata} from "@/app/redux/storeSlice"
import { AppDispatch, RootState } from "@/app/redux/store";

export default function AddProduct() {
 

  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event: any, reason: any) => {
    if (reason && reason === "backdropClick") return;
    setOpen(false);
  };
   type FormValues = {
    CompanyName: string;
    MRP: string;
    Product: string;
    ExpiredDate: string;
  };

  const {
    handleSubmit,
    control,
  } = useForm<FormValues>();
  const dataprod = useSelector((state: RootState) => state.product.value);
  
 
const dispatch=useDispatch<AppDispatch>();
  const addProduct = (data: FormValues) => {
   console.log(data,"data")
    if(data){
      dispatch(addProductdata(data))
    }
   
    
    handleClose(event,"");
  };
  return (
    <>
      <Stack>
        <Box>
          <Button
            onClick={() => {
              handleClickOpen();
            }}>
            Add
          </Button>
          <Button>Update</Button>
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Company Name</TableCell>
                <TableCell align="right">Product Name</TableCell>
                <TableCell align="right">MRP</TableCell>
                <TableCell align="right">Expired Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataprod.map((row:any,ind:number) => (
                <TableRow
                 key={ind}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row?.CompanyName}
                  </TableCell>
                  <TableCell align="right">{row.Product}</TableCell>
                  <TableCell align="right">{row.MRP}</TableCell>
                  <TableCell align="right">{row.ExpiredDate}</TableCell>
                
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
 

      

      </Stack>
      <Drawermodule
        anchor={"right"}
        open={open}
        onClose={() => {
          handleClose(event, "backdropClick");
        }}
        onOpen={() => {}}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Add Products</Typography>
          <IconButton
            onClick={() => {
              handleClose(event, "");
            }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ pt: 0 }}>
          <form onSubmit={handleSubmit(addProduct)}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}>
                {/* <Typography>Name</Typography> */}

                <Formcontroller
                  control={control}
                  rules={{
                    required: "company is required",
                  }}
                  name="CompanyName"
                
                />
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}>
                <Formcontroller
                  control={control}
                  rules={{
                    required: "product is required",
                  }}
                  name="Product"
           

                />
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}>
                {/* <Typography>Expired Date</Typography> */}

                <Formcontroller
                  control={control}
                  rules={{
                    required: "Expired Date is required",
                  }}
                  name="ExpiredDate"
                  datePicker={true}
            
                />
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}>
               
                <Formcontroller
                  control={control}
                  rules={{
                    required: "MRP is required",
                  }}
                  name="MRP"
              
                  typeField={true}
                />
              </ListItem>
            </Box>
            <Button type="submit">save</Button>
          </form>
        </List>
      </Drawermodule>
    </>
  );
}
