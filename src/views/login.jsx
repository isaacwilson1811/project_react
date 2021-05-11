import { LoginForm } from '../components';
import { NewUserForm } from '../components';

import { Container, Divider, Segment, Button, Icon } from 'semantic-ui-react'

export function Login(){  
  return (
    <>
      <Segment>
        <Container>
          <LoginForm />
        </Container>
      </Segment>
      <Divider horizontal> OR </Divider>
      <Segment>
        <Container>
          <NewUserForm />
        </Container>
      </Segment>
    </>
  )
}