import React from "react";
import { InputGroup, Toaster, EditableText, Button } from '@blueprintjs/core';
import { useEffect, useState } from 'react';


const AppToaster = Toaster.create({
    position: "top"
})
function App() {
    const [users, setUsers] = useState([]);
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newWebsite, setNewWebsite] = useState("");

    // get api:
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((resp) => resp.json())
            .then((json) => setUsers(json))
    }, [])

    // post api:
    function addUser() {
        const name = newName.trim();
        const email = newEmail.trim();
        const website = newWebsite.trim();

        if(name && email && website){
            fetch('https://jsonplaceholder.typicode.com/users',
                {
                    method: "POST",
                    body: JSON.stringify({
                        name,
                        email,
                        website
                    }),
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                }
            ).then((response) => response.json())
            .then((data)=> {
                setUsers([...users, data]);
                AppToaster.show({
                    message: "user added successfully",
                    intent: 'success',
                    timeout: 3000
                })
                setNewName("");
                setNewEmail("");
                setNewWebsite("");
            })
        }
    }


    // put api:
    function onChangeHandler(id, key, value) {
        setUsers((users) =>{
            return users.map(user =>{
                return user.id === id ? {...user, [key]: value } : user;
            })
        })
    }

    function updateUser(id) {
        const user = users.find((user) => user.id === id );
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(user),
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                }
            ).then((response) => response.json())
            .then((data)=> {
                AppToaster.show({
                    message: "user updated successfully",
                    intent: 'success',
                    timeout: 3000
                })
            })
    }

    // delete api:
    function deleteUser(id) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
                {
                    method: "DELETE",                   
                }
            ).then((response) => response.json())
            .then((data)=> {
                setUsers((users) => {
                    return users.filter(user => user.id !== id)
                })

                AppToaster.show({
                    message: "user deleted successfully",
                    intent: 'success',
                    timeout: 3000
                })
            })
    }


    return (
        <div className="fetch">
            <h1>Fetch API</h1>
            <div className="table1">                
              <table className= 'bp4-html-table modifer'>
                  <thead>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>websit</th>
                      <th>Action</th>
                  </thead>
                  <tbody>
                  {users.map(user =>
                      <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          
                          <td><EditableText onChange={value => onChangeHandler(user.id, 'email', value)} 
                              value={user.email} /></td>
                          
                          <td><EditableText type="text" onChange={value => 
                              onChangeHandler(user.id, 'website', value)} value={user.website} /></td>
                          
                          <td>
                              <Button intent='primary' onClick={() => updateUser(user.id)} >Update</Button>
                              <span>  </span>
                              <Button intent='danger' onClick={() => deleteUser(user.id)} >Delete</Button>
                          </td>
                      </tr>
                    )}
                  </tbody>
                  <tfoot>
                      <tr>
                          <td></td>
                          <td>
                              <InputGroup 
                                  value={newName}
                                  onChange={(e) => setNewName(e.target.value)}
                                  placeholder='Enter Name...'
                              />
                          </td>
                          <td>
                              <InputGroup 
                                  value={newEmail}
                                  onChange={(e) => setNewEmail(e.target.value)}
                                  placeholder='Enter Email...'
                              />
                          </td>
                          <td>
                              <InputGroup 
                                  value={newWebsite}
                                  onChange={(e) => setNewWebsite(e.target.value)}
                                  placeholder='Enter Website...'
                              />
                          </td>
                          <td>
                              <button className="btn-success" onClick={addUser} >Add User</button>
                          </td>
                      </tr>
                  </tfoot>
              </table>
            </div>
        </div>
    );
}

export default App;