import { LoginForm } from '../components';
import { NewUserForm } from '../components';
import { useSessionStore } from '../store';
import { Container, Divider, Segment} from 'semantic-ui-react'

export function Login() {
  const loggedIn = useSessionStore(state => state.loggedIn);
  return (
    <>
    <Segment>
      <Container>
        <LoginForm />
      </Container>
    </Segment>
    {loggedIn ? (<></>) : (
    <>
    <Divider horizontal> OR </Divider>
    <Segment>
      <Container>
        <NewUserForm />
      </Container>
    </Segment>
    </>
    )}
    </>
  )
}