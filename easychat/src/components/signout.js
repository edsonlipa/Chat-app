import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import  {useCollectionData} from 'react-firebase-hooks/firestore'



function SignOut() {
  const signInWithGoogle=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
    return auth.currentUser && (
    <button onClick={()=>auth.signOut()}>
        Sign out
    </button>
  );
}

export default SignOut;
