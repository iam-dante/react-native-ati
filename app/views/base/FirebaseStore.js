import React, { useEffect, useState } from 'react'
import {View, Text,Button} from 'react-native'
import firestore from '@react-native-firebase/firestore'

const FirebaseStore = () =>{
    const [data, setData] = useState([])
    
    /**
     * Playground of testing the fiebase techniques 
     * 
     */
    


    //  getuser = async () => {
    //      const userDoc = await firestore().collection("user").doc('ethrw57xfNRCwJkgwjY1').get()
    //      setData(userDoc.data().age)
    //      console.log(userDoc.data().age)
    //  }
   
        useEffect(() => {
            const obj ={}
            const subscriber = firestore()
                .collection('university')
                .onSnapshot(doc => {
                    // console.log(doc)
                    doc.forEach(dc =>{
                    obj[dc.id] = dc.data().name
                    })

                    setData(obj)
                    for(let key in obj){
                        console.log(key)
                    }
                    
                });
            
            // Stop listening for updates when no longer required
            return () => subscriber();
        }, []);
 
    
    
    return(
        <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>

    {/* {data.map( vl => 
    
    // <Text style={{padding:24}}>Firebase App:{vl}</Text>
    
    
    )} */}

    
        
            
            <Button
            title="Add"
            // onPress={}
            />
        </View>
    )
}

export default FirebaseStore