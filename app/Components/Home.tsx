
"use client"
import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Container } from '@mui/material'
import { Provider } from 'react-redux'
import {store} from '@/app/redux/store'

export default function Home({children}:{children:React.ReactNode}) {
 
  return (
    <div  style={{textAlign:"center"}}>
        <Container maxWidth="md">
        <Nav/>
        <Provider store={store}>
        <div style={{textAlign:"center",marginBottom:"1rem"}}>{children}</div>
        </Provider>
        <Footer/>
        </Container>
    </div>
  )
}
