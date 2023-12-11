import React, {useState, useEffect} from "react";

function Form2() {
  const [values, setValues] = useState({
    name: '',
    password: ''
  })
  const [errors, setError] = useState({})

  function handleChange(e){
    setValues({...values, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
    const Validation = (values) => {
      let errors = {}

      if(!values.name){
        errors.name = "Name Required"
      }else if (values.name.length < 5){
        errors.name = "name must be more than 5 chars"
      }else if (Number(values.name)){
        errors.name = "only integer"
      }
      if(!values.password){
        errors.password = "Password Required"
      }else if (values.password.length < 9){
        errors.password = "name must be more than 9 chars"
      }
      return errors;
    }
    setError(Validation(values));
    
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && (values.name !== "" && values.password !== "")){
      alert("Form Submitted");
    }
  }, [errors])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Username: <input type="text" placeholder="Enter username" name="name" value={values.name} 
        onChange={handleChange} /><br/>{errors.name && <p style = {{color: 'red',fontSize: '5px'}}>{errors.name}</p>}
        
        Password: <input type="password" placeholder="Enter Password" name="password" 
        value={values.password} onChange={handleChange}  /><br/>
        {errors.password && <p style = {{color: 'red'}}>{errors.password}</p>}
        
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}


export default Form2;