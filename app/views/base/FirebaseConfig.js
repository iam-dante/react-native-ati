import firebase from '@react-native-firebase/app'
import auth from'@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin'


GoogleSignin.configure({
  webClientId: "67287288053-v9lo7e7j44ok51234896fra31smhmgdl.apps.googleusercontent.com",
  offlineAccess: false
});


export async function onGoogleButtonPress() {
  
    try{
       console.log("HERE!!")
       await GoogleSignin.hasPlayServices();
     
       //  Get the users  ID token
       const  userInfo = await GoogleSignin.signIn();
 
       // Create a Google credential with the token
       const googleCredential =  firebase.auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken);
       
       //  // Sign-in the user with the credential
       return auth().signInWithCredential(googleCredential);


     }catch(e){
       console.log(e)
    }
   
 }
 
 export async function signOut (){
   try {
     // await GoogleSignin.revokeAccess();
     // await GoogleSignin.signOut();
     await auth()
       .signOut()
       .then(() => console.log("Sign Out Done"));
     

   } catch (error) {
     console.error(error);
   }
 };


