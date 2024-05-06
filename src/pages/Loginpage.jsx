
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Loginpage = () => {
let navigate= useNavigate()
const[namevalue,setnamevalue]=useState("");
const[emailvalue,setemailvalue]=useState("");
const[passwordvalue,setpasswordvalue]=useState("");
const[addressvalue,setaddressvalue]=useState("");
const namechanger=(e)=>{
let name=e.target.value 
console.log(name)
setnamevalue(name)
 }
 const emailchanger=(e)=>{
    let email=e.target.value 
    console.log(email)
    setnamevalue(email)
     }
     const passwordchanger=(e)=>{
        let password=e.target.value 
        console.log(password)
        setnamevalue(password)
         }
         const addresschanger=(e)=>{
            let address=e.target.value 
            console.log(address)
            setnamevalue(address)
             }
             const handleSubmit=(e)=>{
                e.preventDefault()
                console.log(handleSubmit)
                navigate('/home')
                let obj={
                 name:namevalue,
                 email:emailvalue,
                 password:passwordvalue,
                 address:addressvalue
                }
            }
  return (
    <div>
      <form className='login'>
        <label htmlFor="">Name:-
            <input type='text' onChange={namechanger}></input>
        </label>
        <label htmlFor="">E-mail:-
            <input type='text' onChange={emailchanger}></input>
        </label>
        <label htmlFor="">Password:-
            <input type='password' onChange={passwordchanger}></input>
        </label>
        <label htmlFor="">Address:-
            <textarea type='text' onChange={addresschanger}></textarea>
        </label>
        <button onClick={handleSubmit} style={{backgroundColor:"green", border:"radius",width:"20rem"}}>Submit
       </button>
      </form>
    </div>
  )
}

export default Loginpage
