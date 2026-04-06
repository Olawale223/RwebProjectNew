import React from 'react'
import { isauthenticated } from './services'

import { Navigate, Outlet } from 'react-router-dom'
import axios from 'axios'

export default function Auth() {
  
  return (
    isauthenticated ? <Outlet /> : <Navigate to="/access" />
  )
}


const url = "http://102.37.214.37:5001/";

export const mainAPI = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
})


// const formData = {firstName: "Name", email: "email@example.com"}

// mainAPI.post('/signin', formData)