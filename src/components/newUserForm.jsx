import { useUserStore } from '../store';
import { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';


export const NewUserForm = () => {
  // form state hook
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  // global store state hook
  const addUser = useUserStore(state => state.addUser);
  // insert data into global store function
  const createNewUser = ({firstName, lastName, email, password}) =>{
    let uid = Date.now().toString(36) + Math.random().toString(36).substr(2);
    let newUserData = {
      id: uid,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }
    addUser(newUserData);
  }


  const handleInputChange = (event) => {
    const { target: { value, name } } = event;
    setFormData({...formData,[name]: value});
  }

  return (
    <>
    <h2 style={{width: 400,margin: '32px auto'}}>Create New Account</h2>
    <Form style={{width: 400,margin: '32px auto'}} onSubmit={()=>{createNewUser(formData)}}>
      <Form.Field>
          <label>First Name</label>
          <input name='firstName' placeholder='First Name' onChange={handleInputChange} />
      </Form.Field>
      <Form.Field>
          <label>Last Name</label>
          <input name='lastName' placeholder='Last Name' onChange={handleInputChange} />
      </Form.Field>
      <Form.Field>
          <label>Email Address</label>
          <input name='email' placeholder='email' onChange={handleInputChange} />
      </Form.Field>
      <Form.Field>
          <label>Password</label>
          <input name='password' type='password' placeholder='password' onChange={handleInputChange} />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
    </>
  )
}