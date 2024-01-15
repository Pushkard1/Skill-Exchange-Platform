import React from 'react'

export default function Register() {
  return (
    <div>
      <form>
        <label>Name</label>
        <input type='text' placeholder='Enter your name......'/>
        <label>Email</label>
        <input type='email' placeholder='Enter your EmailID......'/>
        <label>Password</label>
        <input type='password' placeholder='Enter your password......'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
