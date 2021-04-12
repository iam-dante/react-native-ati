import React, { useEffect, useState } from 'react'
import {View, Text,Button} from 'react-native'
import firestore from '@react-native-firebase/firestore'

const FirebaseStore = () =>{
    const [data, setData] = useState([])
    var Uni = []

    


    //  getuser = async () => {
    //      const userDoc = await firestore().collection("user").doc('ethrw57xfNRCwJkgwjY1').get()
    //      setData(userDoc.data().age)
    //      console.log(userDoc.data().age)
    //  }
   
        useEffect(() => {
          const subscriber = firestore()
            .collection('university')
            .onSnapshot(doc => {
                // console.log(doc)
                doc.forEach(data =>{
                    const name = data.data().name
                    name.forEach(vl =>  Uni.push(vl))
                })
                
            });
            
            // Stop listening for updates when no longer required
            return () => subscriber();
        }, []);


    //    const add = async () =>{
    //         firestore().collection('user').add(
    //             {name: 'Joseline', age: 30,}
    //         )

    //      }
        
    
    return(
        <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
        
        <Text style={{padding:24}}>Firebase App:</Text>
            
            <Button
            title="Add"
            // onPress={}
            />
        </View>
    )
}

export default FirebaseStore