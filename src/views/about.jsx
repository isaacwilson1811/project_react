import { useUserStore } from '../store/userStore';


export function About(){
  const [users, addUser, clearUsers] = useUserStore(state => [state.users, state.addUser, state.clearUsers]);
  return (
    <>
    <h1>Users:</h1>
    <button onClick={addUser}>add user</button>
    <button onClick={clearUsers}>clear users</button>
    <u>
    {users.map((user)=><li>{user}</li>)}
    </u>
    </>
  );
}