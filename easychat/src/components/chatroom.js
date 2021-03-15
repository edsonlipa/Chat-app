
import {useAuthState} from 'react-firebase-hooks/auth'
import  {useCollectionData} from 'react-firebase-hooks/firestore'
import ChatMessage from './chatmessage'
import SignOut from './signout'
import { firestore } from '../apis/firebaseconf'

const messageRef = firestore.collection('messages');
const query = messageRef.orderBy('createdAt').limit(25);

//const [messages] =useCollectionData(query, {idField: 'id'});

function ChatRoom() {
  return (
    <>
      <div>
        {//messages && messages.map(msg=><ChatMessage key={msg.id} message={msg.text}/>)
        }
      </div>
      <div>
        <SignOut/>
      </div>
      
    </>
  );
}

export default ChatRoom;
