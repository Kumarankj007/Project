import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';


const schema = yup.object().shape({
  	firstName: yup.string().required('First Name is madatory'),
  	lastName: yup.string().required('Last Name is madatory'),
  	email: yup.string().email('pls Enter a valid Email').required('Enter Email'),
  	age: yup.number('only integers').integer().positive('only +ve numbers').required(),
  	password: yup.string().required().min(4, 'Minimum 4 chars required').max(15, 'Enter upto 15 chars only'),
  	confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  })

function Form1() {
  const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm({
  	resolver: yupResolver(schema),
  	mode: 'onChange'
  });
  console.log(isValid)
  return (
    <div className="Form">

    	<h1>Sign up</h1>
    	<form onSubmit={handleSubmit((data) => {
    		console.log(data);
    	})}>
    	<input {...register('firstName')} placeholder="First Name..." /><br />
    	<p>{errors.firstName?.message}</p>

    	<input {...register('lastName')} placeholder="Last Name..." /><br />
    	<p>{errors.lastName?.message}</p>
    	
    	<input {...register('email')} placeholder="Email..." /><br />
    	<p>{errors.email?.message}</p>
    	
    	<input type='text' maxLength='2' {...register('age')} placeholder="Age..."  /><br />
    	<p>{errors.age?.message}</p>
    	
    	<input {...register('password')} type="password" placeholder="Password..." /><br />
    	<p>{errors.password?.message}</p>
    	
    	<input {...register('confirmPassword')} type="password" placeholder="Confirm Password" /><br />
    	<p>{errors.confirmPassword?.message}</p>
    	
    	<button type="submit" id="submit" disabled={isDirty && !isValid} >
          <nav>
            <Link to="../Home" disabled={isDirty && !isValid} style={{textDecoration: 'none'}}>Login</Link>
          </nav>
      </button>
    	</form>
    </div>
  );
}

export default Form1;