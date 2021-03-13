import './App.css';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import  {useCollectionData} from 'react-firebase-hooks/firestore'

const messageRef = firestore.collection('messages');
const query = messageRef.orderBy('createdAt').limit(25);

const [messages] =useCollectionData(query, {idField: 'id'});

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <section>
        {}
      </section>
    </div>
  );
}

export default App;
