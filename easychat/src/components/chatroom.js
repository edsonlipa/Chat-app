
import firebase from 'firebase/app'

import  {useCollectionData} from 'react-firebase-hooks/firestore'
import ChatMessage from './chatmessage'
import SignOut from './signout'
import { auth, firestore } from '../apis/firebaseconf'
import { useRef, useState } from 'react'


function ChatRoom() {
  const dummy= useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  
  const [messages] =useCollectionData(query, {idField: 'id'});
  
  const [formValue,setFormValue]= useState('');

  const sendMessage=async(e)=>{
    e.preventDefault();
    const {uid,photoURL}=auth.currentUser;
    await messagesRef.add({
      text:formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    setFormValue('')
    dummy.current.scrollIntoView({behavior:'smooth'});
  }
  return (
    <>
    <SignOut/>
      <main>
        
        {messages && messages.map(msg=><ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </main>
      
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e)=>setFormValue(e.target.value)}/>
        <button type='submit'>send message</button>
      </form>
      
    </>
  );
}

export default ChatRoom;
