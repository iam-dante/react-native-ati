import React, { useEffect, useState } from 'react'
import {View, Text,Button} from 'react-native'
import firestore from '@react-native-firebase/firestore'

const FirebaseStore = () =>{
    const [data, setData] = useState([])

    const listData = []
    
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
            const subscriber = firestore()
                .collection('test')
                .onSnapshot(doc => {
                    // console.log(doc)
                    doc.forEach(dc =>{
                    // console.log(dc.id, dc.data().name)
                    listData.push({id: dc.id, name: dc.data().name})

                    

                    
                    })
                    
                });
            
            // Stop listening for updates when no longer required
            return () => subscriber();
        }, []);
 
    function list(){
        return (
            listData.map(vl =>{
                console.log(vl.id, vl.name)
            })
        )
    }
    
    return(
        <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>

    {/* {data.map( vl => 
    
    // <Text style={{padding:24}}>Firebase App:{vl}</Text>
    
    
    )} */}

    
        
            
            <Button
            title="Add"
            onPress={list}
            />

            {
                listData.map(vl =>{
                    console.log(vl)
                })
            }
        </View>
    )
}

export default FirebaseStore