import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import Link from "next/link";

export default function Admininterface() {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <Link href={"/admininterface/addproduct"}>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignSelf="start"
            alignItems="center">
            <ArrowForwardIosTwoToneIcon />
            <Typography variant="h6">Add Product</Typography>
          </Stack>
        </Link>
        <Link href={"/admininterface/addemployee"}>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignSelf="start"
            alignItems="center">
            <ArrowForwardIosTwoToneIcon />{" "}
            <Typography variant="h6">Add Employee</Typography>
          </Stack>
        </Link>
      </Box>
    </Box>
  );
}
