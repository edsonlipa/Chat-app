
import { auth } from '../apis/firebaseconf'



function ChatMessage(props) {
  const {text,uid}=props.message;
  const messageClass = uid === auth.currentUser.uid? 'sent':'received';
  const photoURL='https://ep01.epimg.net/elpais/imagenes/2018/11/06/gente/1541494541_621304_1541494790_noticia_normal.jpg'
    return (
      <div className={`message ${messageClass}`}>
        <img src={photoURL}/>
        <p>{text}</p>
      </div>
  );
}

export default ChatMessage;
