import React, { useState } from 'react';
import './calc.css';

function Calc(){
	const [input, setInput] = useState('');

    
	return(
		<div>
			<div className="container">
	      <div className="calculator">
	      	<h1>Calculator</h1>
	        <input type="text" placeholder="0" className="input" value={input}/>
	        <input type='button' value='Cl' className='inp' onClick={(e) => setInput('')} />
	        <input type='button' value='DEL' className='inp' onClick={(e) => setInput(input.slice(0, -1))} />

	        <input type='button' value='%' className='inp' onClick={(e) => setInput(input + e.target.value)} />
	        <input type='button' value='/' className='inp' onClick={(e) => setInput(input + e.target.value)} />
	        <input type='button' value='7' className='inp' onClick={(e) => setInput(input + e.target.value)} />
	        <input type='button' value='8' className='inp' onClick={(e) => setInput(input + e.target.value)} />
	        <input type='button' value='9' className='inp' onClick={(e) => setInput(input + e.target.value)} />
	        <input type='button' value='*' className='inp' onClick={(e) => setInput(input + e.target.value)} />
	        <input type='button' value='4' className='inp' onClick={(e) => setInput(input + e.target.value)} />
	        <input type='button' value='5' className='inp' onClick={(e) => setInput(input + e.target.value)} />
	        <input type='button' value='6' className='inp' onClick={(e) => setInput(input + e.target.value)} />
	        <input type='button' value='-' className='inp' onClick={(e) => setInput(input + e.target.value)} />
	        <input type='button' value='1' className='inp' onClick={(e) => setInput(input + e.target.value)} />
	        <input type='button' value='2' className='inp' onClick={(e) => setInput(input + e.target.value)} />
	        <input type='button' value='3' className='inp' onClick={(e) => setInput(input + e.target.value)} />
	        <input type='button' value='+' className='inp' onClick={(e) => setInput(input + e.target.value)} />
	        <input type='button' value='.' className='inp' onClick={(e) => setInput(input + e.target.value)} id="dot" />
	        <input type='button' value='0' className='inp' onClick={(e) => setInput(input + e.target.value)} />
	        
	        <input type='button' value='=' onClick={e => setInput(eval(input))} className="equal" />
	      </div>
    	</div>
		</div>
	)
}

export default Calc;