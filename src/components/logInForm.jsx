import { Form, Button } from 'semantic-ui-react';

export function LogInForm(){
  return(
    <Form style={{width: '400px', margin: '32px auto'}} onSubmit={() => console.log('submit')} >
      <Form.Field>
          <label>Email Address</label>
          <input name='email' placeholder='email' />
      </Form.Field>
      <Form.Field>
          <label>Password</label>
          <input name='password' type='password' placeholder='password' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
  </Form>
  )
}