import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

// const auth = getAuth();
// const provider = GoogleAuthProvider()
export const SignInWithGoogle = () =>{
    return (dispatch,getState) =>{
      const auth = getAuth();
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch({ type: "SIGNIN", payload: {user,token} });
      })
      .catch((error) => {
        const errorMessage = error.message;
        const email = error.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        dispatch({ type: "SIGNIN_ERROR", payload: {errorMessage, email} });

      });
    };
};


export const SignOut = () =>{
    return (dispatch,getState) => {

      const auth = getAuth();
      signOut(auth).then(() => {
          console.log('log out')
      }).catch((err) => {
        const error = err; 
        dispatch({ type: "SIGNOUT_ERROR", payload: error });
      
      });
    };
};


