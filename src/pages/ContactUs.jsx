import React from 'react'
import Contact from '../components/contactUs/Contact'
import { Outlet } from 'react-router-dom'

import Branches from '../components/contactUs/Branches'
const ContactUs = () => {
  return (
    <div>
      <Outlet>
       
      </Outlet>
    </div>
  )
}

export default ContactUs