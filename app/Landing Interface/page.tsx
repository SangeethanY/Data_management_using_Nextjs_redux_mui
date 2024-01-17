import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function Landinginterface() {
  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Typography variant='h2' color={"#bf74cb"}>
        YSKMS <span style={{color:"black"}}>SERVICE</span>
      </Typography>
      <Image alt="Well come" width={400} height={300} src={"/wellcome.jpg"} />
    </Box>
  )
}
