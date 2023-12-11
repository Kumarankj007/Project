import React, { useState } from 'react';
import './App.css';


function Form() {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [phno, setPhno] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errmsg, setErrmsg] = useState('');
	const [errp, setErrp] = useState('');
	const [erre, setErre] = useState('');

	function userAge(e) {
    let n = e.target.name;
    let v = e.target.value;
    let err = "";
        if (!Number(v) || v < 0 ) {
            err = "Invalid value"
        }
    
    setErrmsg(err);
    setAge(v);
	}
	function userPhno(e) {
    let n = e.target.name;
    let v = e.target.value;
    let err = "";
        if (v === "" || !Number(v)) {
            err = "Invalid value"
        }
    
    setErrp(err);
    setPhno(v);
	}

	function Formsubmit(e) {
		e.preventDefault();
		alert("your name: " + name + "     your age: " + age +"       your Phno: " +phno);
	}


	

	return(
		<div>
			<form onSubmit={Formsubmit}>
				
				<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
				autoFocus required /><br /><br />

				<input type="text" placeholder="Age" value={age} onChange={userAge}  maxlength='2' /><br />{errmsg}<br />

				<input type="text" placeholder="Ph. No." maxlength='10' value={phno} onChange={userPhno} /><br />{errp}<br />
				
				<input type="email" placeholder="Email" required /><br /><br />
				
				<input type="password" placeholder="Password" maxlength="8" /><br /><br />

				<button type="submit">Submit</button>

			</form>
		</div>
	)
}
export default Form;