import React from "react";
import {useState} from 'react';
import Result from './Result';
const secretNum = Math.floor(Math.random()*11);

export default function Guess(){
	const [term, setTerm] = useState("");
	
	const handleChange = (e) => {
		setTerm(e.target.value)
	}
	
	return(
	<div className="container Guess">
		<div className="head">
			<h1>Guess the Number:</h1>
			<label>
				Guess the number between 0 to 10 {/*(answer: {secretNum})*/}
			</label>
		</div>
		<br />
		<input id="term" type="text" name="term" onChange={handleChange} size="1" maxLength="2" autoFocus />
		<br /><br />
		<Result secretNum ={secretNum} term={term}/>
	</div>
	);
}
