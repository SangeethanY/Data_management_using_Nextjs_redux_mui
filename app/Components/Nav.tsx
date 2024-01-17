import Link from "next/link";
import React from "react";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import { AppBar, Box, Icon, Stack, Toolbar, styled } from "@mui/material";

export default function Nav() {
  return (
    <Box mt={5}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link href="/">
          <HomeTwoToneIcon fontSize="large" />
        </Link>

        <Stack flexDirection="row" justifyContent="space-between" width={"40%"}>
          <Link href="/productBillinterface">Product Bill</Link>

          <Link href="/salesproductlist">Sales Product List</Link>
          <Link href="/admininterface">Admin Interface</Link>
        </Stack>
      </Toolbar>
    </Box>
  );
}
