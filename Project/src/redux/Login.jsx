import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {login, logout} from './feature/user.jsx';

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const [name, setName] = useState("");
  const [age, setAge] = useState('');
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [errn, setErrn] = useState("");
  const [erra, setErra] = useState("");
  const [erre, setErre] = useState("");
  const [errp, setErrp] = useState("");

  const nameChange = (e) => {
    let v = e.target.value;
    let err = "";
      if (Number(v)) {
        err = "Strings only pls"
      }
    setErrn(err);
    setName(v);
  }
  
  function ageChange(e) {
    let v = e.target.value;
    let err = "";
      if (!Number(v) || v < 0 ) {
          err = "Invalid value";
      }    
    setErra(err);
    setAge(v);
  }

  function emailChange(e) {
    let v = e.target.value;
    let err= '';
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let result = regex.test(v);
      if(!result){
        err="Enter valid email";
      }
    setErre(err);
    setEmail(v);
  }

  function phnChange(e) {
    let v = e.target.value;
    let err= '';
      if(v.length < 10){
        err="10 numbers only"
      }
      else if(!Number(v)){
        err="numbers only";
      }    
    setErrp(err);
    setPhno(v);
  }

  return (
    <div>
      {!user.name && (
        <div>
          Name: <input type='text' value={name} placeholder='Name' onChange={nameChange} />
          <p style={{color: 'red'}}>{errn}</p>

          Age: <input type='text' maxLength='2' placeholder='0' value={age} onChange={ageChange} />
          <p style={{color: 'red'}}>{erra}</p>
          
          Email: <input type='email' placeholder='Email' value={email} 
          onChange={emailChange} /><p style={{color: 'red'}}>{erre}</p>
          
          Ph. No: <input type='text' placeholder='Ph. No.' maxLength='10' value={phno} 
          onChange={phnChange} /><p style={{color: 'red'}}>{errp}</p>
        </div>
      )}

      { !user.name ?
      <button onClick={() => dispatch(login({name, age, email, phno}))} > Login</button> 
      : <button onClick={() => dispatch(logout())}> Logout</button>}
    </div>
  );
}

export default Login;
