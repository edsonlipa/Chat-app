import './App.css';
import {auth} from './apis/firebaseconf.js';
import SignIn from './components/signin';
import ChatRoom from './components/chatroom';

import {useAuthState} from 'react-firebase-hooks/auth'
import SignOut from './components/signout';


function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>{user?<SignOut/>:<h2>Hello to his chat room by Edson =)</h2>}</header>
      <section>
        {user?<ChatRoom/>:<SignIn/>}
      </section>
      
    </div>
  );
}

export default App;
