import React from 'react'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Signin from './Signin'
import LogOut from './LogOut'

const Navbar = () => {
    const [user] = useAuthState(auth)
    const style={
        nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
        heading:`text-white text-3xl`
    }
  return (
    <div className={style.nav}>
        <h1 className={style.heading}>Chat App</h1>
        {user ? <LogOut/> : <Signin/>}
        
    </div>
  )
}

export default Navbar