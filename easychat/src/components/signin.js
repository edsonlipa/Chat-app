import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import  {useCollectionData} from 'react-firebase-hooks/firestore'



function SignIn() {
  const signInWithGoogle=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
    return (
    <button>
        Sign in with Google
    </button>
  );
}

export default SignIn;
