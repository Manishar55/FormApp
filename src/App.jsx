
import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData]=useState({
    firstName:"", lastName:"", email:"", country:"India"
  });

  function changeHandler(event){
    const {name, value, checked, type}=event.target;
    setFormData((prev)=>({...prev, [name]:value}))
  }

  return (
    <div className='container'>
      <h1>Form</h1>

      <form className='form'>

        <label htmlFor='firstName'>First Name</label>
        <br></br>
        <input
        type='text'
        name='firstName'
        id='firstName'
        placeholder='Manisha'
        value={formData.firstName}
        onChange={changeHandler}
        />
        <br></br>
        <br></br>

        <label htmlFor='LastName'>Last Name</label>
        <br></br>
        <input
        type='text'
        name='lastName'
        id='lastName'
        placeholder='Rana'
        value={formData.lastName}
        onChange={changeHandler}
        />
        <br></br>
        <br></br>

        <label htmlFor='email'>Email</label>
        <br></br>
        <input
        type='text'
        name='email'
        id='email'
        placeholder='email'
        value={formData.email}
        onChange={changeHandler}
        />
        <br></br><br></br>

        <label htmlFor='country'>Country</label>
        <select id='country' value={formData.country}>
          <option>India</option>
          <option>Japan</option>
          <option>Korea</option>
          <option>China</option>
          <option>US</option>
        </select>

        

      </form>

    </div>
  )
}

export default App
