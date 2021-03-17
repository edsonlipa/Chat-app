
import {auth} from '../apis/firebaseconf.js';



function SignOut() {
  
    return auth.currentUser && (<>
    <h2>Hello {auth.currentUser.displayName}</h2>
    <button onClick={()=>auth.signOut()}>
        Sign Out 
    </button>
    </>
  );
}

export default SignOut;
