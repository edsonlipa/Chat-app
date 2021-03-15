import './App.css';
import {auth} from './apis/firebaseconf.js';
import SignIn from './components/signin';
import ChatRoom from './components/chatroom';

import {useAuthState} from 'react-firebase-hooks/auth'
import  {useCollectionData} from 'react-firebase-hooks/firestore'


function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <section>
        {user?<ChatRoom/>:<SignIn/>}
      </section>
      
    </div>
  );
}

export default App;
