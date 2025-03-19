
import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India", streetAddress: "",
    city: "", state: "", postalCode: "", comments: false, candidates: false, offers: false, pushNotification:""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function submitHandler(event){
      event.preventDefault();
      console.log("Printing the value of form data");
      console.log(formData);
      
  }

  return (
    <div className='container'>
      <h1>Form</h1>

      <form className='form' onSubmit={submitHandler}>

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

        <label className='fr' htmlFor='postalCode'>postal Code</label>
        <br></br>
        <input
          className='fr'
          type='text'
          name='postalCode'
          id='postalCode'
          placeholder='postalCode'
          value={formData.postalCode}
          onChange={changeHandler}
        />
        <br></br><br></br>

        <label>Notification by email...</label>
        <br></br><br></br>

        <div className='check'>
          <input
            type='checkbox'
            name='comments'
            id='comments'
            checked={formData.comments}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor='comments'>Comments</label>
            <p>Get notified when someone comment on a post</p>
          </div>

        </div>
        <br></br>

        <div className='check'>
          <input
            type='checkbox'
            name='candidates'
            id='candidates'
            checked={formData.candidates}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor='candidates'>Candidates</label>
            <p>Get notified when a candidate applies for a job</p>
          </div>

        </div>
        <br></br>

        <div className='check'>
          <input
            type='checkbox'
            name='offers'
            id='offers'
            checked={formData.offers}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor='offers'>Offers</label>
            <p>Get notified when a candidate accepts or reject an offer</p>
          </div>

        </div>

        <br></br>


        <label>Push Notification...</label>
        <p>These are delivered via SMS to your mobile phone</p>
        <br></br>

        <input
          type='radio'
          name='pushNotification'
          id='pushEverything'
          value="Everything"
          onChange={changeHandler}
        />
        <label htmlFor='pushEverything'>Everything</label><br></br>

        <input
          type='radio'
          name='pushNotification'
          id='pushEmail'
          value="same as email"
          onChange={changeHandler}
        />
        <label htmlFor='pushEmail'>Same as email</label><br></br>

        <input
          type='radio'
          name='pushNotification'
          id='pushNothing'
          value="don't push notification"
          onChange={changeHandler}
        />
        <label htmlFor='pushNothing'>don't push Notificatuins</label><br></br><br></br>


        <button>Save</button>


      </form>

    </div>
  )
}

export default App
