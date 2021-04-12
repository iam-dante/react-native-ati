import firebase from '@react-native-firebase/app'
import auth from'@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import React, { createContext, useEffect, useReducer, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

GoogleSignin.configure({
  webClientId: "67287288053-v9lo7e7j44ok51234896fra31smhmgdl.apps.googleusercontent.com",
  offlineAccess: false
});

// const initialData = {
//   user: undefined, // { name, photo }
//   isRegistered: false,
//   isSomething: false
// }

/**
 * Stores data to store
 */
export const storeData = async (key, vl) =>{
  try{
      const value = JSON.stringify(vl)
      await AsyncStorage.setItem(key, value);
  }
  catch(e) {
    console.log(e)
    throw e
  }
}

/**
 * Loads data from store
 */
const getData = async (key) =>{
  try{
    const value =  await AsyncStorage.getItem(key)
    return JSON.parse(value)
  }
  catch(e){
    console.log(e)
    throw e
  }
}


export const Auth = ({children}) => {
  // Ready State
  const [ready, set] = useState(false)
  const [user, setUser] = useState(null)
  const [registered, register] = useState(false)

  useEffect( () => {
    getData('user@register')
      .then(v => register(v))
      .then(() => set(true))

  },[])


  return (
    <AuthContext.Provider
  
      value={{
          ready,
          user,
          state: registered,
          setstate: register,
          setUser,
          setRegister: (val) => {
            register(val)
            storeData('user@register', val)
          },
          loginGoogle: async function onGoogleButtonPress() {
            try{
              console.log("Sign in")
              await GoogleSignin.hasPlayServices();
            
              //  Get the users  ID token
              const  userInfo = await GoogleSignin.signIn();
              // setUser(userInfo)
              // setstate(true)
              
              // Create a Google credential with the token
              const googleCredential =  firebase.auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken);
              
              //  // Sign-in the user with the credential
              return auth().signInWithCredential(googleCredential);
        
        
            }catch(e){
              console.log(e)
            }},

            signOut:async function signOut (){
              try {
                await GoogleSignin.revokeAccess();
                await GoogleSignin.signOut();
                await auth()
                  .signOut()
                  .then(() => console.log("Sign Out Done"));
                
           
              } catch (error) {
                console.error(error);
              }
            }
      }}
        
    
    >
      {children}
    </AuthContext.Provider>
  )
}
 


