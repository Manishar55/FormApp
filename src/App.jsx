
import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData]=useState({
    firstName:"", lastName:"", email:"", country:"India", streetAddress:"", city:"", state:"", postalCode:"", 
  });

  function changeHandler(event){
    const {name, value, checked, type}=event.target;
    setFormData((prev)=>({...prev, [name]:value}))
  }

  return (
    <div className='container'>
      <h1>Form</h1>

      <form className='form'>

        <label className='fr' htmlFor='firstName'>First Name</label>
        <br></br>
        <input className='fr'
        type='text'
        name='firstName'
        id='firstName'
        placeholder='Manisha'
        value={formData.firstName}
        onChange={changeHandler}
        />
        <br></br>
        <br></br>

        <label className='fr' htmlFor='LastName'>Last Name</label>
        <br></br>
        <input 
        className='fr'
        type='text'
        name='lastName'
        id='lastName'
        placeholder='Rana'
        value={formData.lastName}
        onChange={changeHandler}
        />
        <br></br>
        <br></br>

        <label className='fr' htmlFor='email'>Email</label>
        <br></br>
        <input
        className='fr'
        type='text'
        name='email'
        id='email'
        placeholder='email'
        value={formData.email}
        onChange={changeHandler}
        />
        <br></br><br></br>

        <label className='fr' htmlFor='country'>Country</label>
        <br></br>
        <select className='fr' id='country' value={formData.country}>
          <option>India</option>
          <option>Japan</option>
          <option>Korea</option>
          <option>China</option>
          <option>US</option>
        </select>

        <br></br>
        <br></br>

        <label className='fr' htmlFor='streetAddress'>street Address</label>
        <br></br>
        <input
        className='fr'
        type='text'
        name='streetAddress'
        id='streetAddress'
        placeholder='streetAddress'
        value={formData.streetAddress}
        onChange={changeHandler}
        />
        <br></br><br></br>

        <label className='fr' htmlFor='city'>city</label>
        <br></br>
        <input
        className='fr'
        type='text'
        name='city'
        id='city'
        placeholder='city'
        value={formData.city}
        onChange={changeHandler}
        />
        <br></br><br></br>

        <label className='fr' htmlFor='state'>State</label>
        <br></br>
        <input
        className='fr'
        type='text'
        name='state'
        id='state'
        placeholder='state'
        value={formData.state}
        onChange={changeHandler}
        />
        <br></br><br></br>

        <label className='fr' htmlFor='streetAddress'>streetAddress</label>
        <br></br>
        <input
        className='fr'
        type='text'
        name='streetAddress'
        id='streetAddress'
        placeholder='streetAddress'
        value={formData.streetAddress}
        onChange={changeHandler}
        />
        <br></br><br></br>

        

      </form>

    </div>
  )
}

export default App
