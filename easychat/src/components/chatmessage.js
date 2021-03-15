import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import  {useCollectionData} from 'react-firebase-hooks/firestore'



function ChatMessage(props) {
  const {text,uid}=props.message;
  const messageClass = uid === auth.currentUser.uid? 'sent':'received';
    return (
      <div className={`message ${messageClass}`}>
        <img src={photoURL}/>
        <p>{text}</p>
      </div>
  );
}

export default ChatMessage;
