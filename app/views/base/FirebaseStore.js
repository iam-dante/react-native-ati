import React, { useEffect, useState } from 'react'
import {View, Text,Button} from 'react-native'
import firestore from '@react-native-firebase/firestore'

const FirebaseStore = () =>{
    const [data, setData] = useState('')
    const userId = 'ethrw57xfNRCwJkgwjY1'

     getuser = async () => {
         const userDoc = await firestore().collection("user").doc('ethrw57xfNRCwJkgwjY1').get()
         setData(userDoc.data().age)
         console.log(userDoc.data().age)
     }
   
        useEffect(() => {
          const subscriber = firestore()
            .collection('user')
            .onSnapshot(doc => {
                console.log(doc)
                doc.forEach(data =>{
                    console.log(data.id)
                })
                
            });
      
          // Stop listening for updates when no longer required
          return () => subscriber();
        }, [userId]);


       const add = async () =>{
            firestore().collection('user').add(
                {name: 'Joseline', age: 30,}
            )

         }
        
     
    return(
        <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
            <Text>Firebase App: {data}</Text>
            <Button
            title="Add"
            onPress={add}
            />
        </View>
    )
}

export default FirebaseStore