import { Form, redirect } from 'react-router-dom'
import FormInput from './FormInput';
import "./CSS/FormInput.css"
import { useState } from 'react';

export const Register = () => {
  const [submitted,setSubmitted] = useState(false);
  return (
    <div className='register-container'>
      <h2 className='form-heading'>=&gt; FILL OUT THE BELOW FORM TO BECOME PART OF OUR GYM:</h2>
      <Form method="POST" className='form-container'>
        <FormInput name="name" id="userName" label="Name"/>
        <FormInput name="age" id="userAge" label="Age"/>
        <FormInput name="contact" id="userContact" label="Contact"/>
        <FormInput name="email" id="userEmail" label="Email"/>
        <FormInput name="height" id="userHeight" label="Height"/>
        <FormInput name="weight" id="userWeight" label="Weight"/>
        <button type='submit' className='submit-button' onClick={() => {setSubmitted(true); setTimeout(()=>{setSubmitted(false)},5000)}}>Submit</button>
        {submitted?<div className='form-submitted'>Form Submitted [Check Console]</div> : null}
      </Form>
    </div>
  )
}

export async function handleSubmit(data){
  const formData = await data.request.formData();
  const finalData = Object.fromEntries(formData);
  console.log(finalData);

  return redirect("/register");
} 
