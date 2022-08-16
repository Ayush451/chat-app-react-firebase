import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth } from '../firebase'
const Signin = () => {
    const style= {
        wapper:`flex justify-center`
    }

    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth,provider)
    }
  return (
    <div className={style.wapper}>
        <GoogleButton onClick={googleSignIn}/>
    </div>
  )
}

export default Signin