
import firebase from 'firebase/app'

import  {useCollectionData} from 'react-firebase-hooks/firestore'
import ChatMessage from './chatmessage'
import { auth, firestore } from '../apis/firebaseconf'
import { useRef, useState } from 'react'

const Filter = require('bad-words');

function ChatRoom() {
  const dummy= useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limitToLast(30);
  
  const [messages] =useCollectionData(query, {idField: 'id'});
  
  const [formValue,setFormValue]= useState('');

  const check=(e)=>{
    const filter =new Filter();
    const text= e.target.value;

    if(filter.isProfane(text)){
        const cleaned = filter.clean(text);
        setFormValue(` you're going to be banned for saying... ${cleaned}`)
    }else{
    setFormValue(e.target.value);
    }
  }

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
      <main>
        {messages && messages.map(msg=><ChatMessage key={msg.id} message={msg} /> )}
        <div ref={dummy}></div>
      </main>
      
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={check}/>
        <button type='submit'>send message</button>
      </form>
      
    </>
  );
}

export default ChatRoom;
