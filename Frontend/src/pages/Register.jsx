import { useState } from 'react'

export default function Register() {
  const [data,setData] = useState({
    name:'',
    email:'',
    password:'',
  })

  const RegisterUser = (e) =>{
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={RegisterUser}>
        <label>Name</label>
        <input type='text' placeholder='Enter your name......' value={data.name} onChange={(e)=> setData({...data, name: e.target.value})}/>
        <label>Email</label>
        <input type='email' placeholder='Enter your EmailID......' value={data.email} onChange={(e)=> setData({...data, email: e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder='Enter your password......' value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
