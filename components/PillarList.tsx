import { Text, View } from "react-native";
import { useEffect,useState } from "react";
import { app } from "@/firebaseConfig";

import { useAuth } from '@/context/authContext'
import { StatusBar } from 'expo-status-bar'

// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type props = {
    pillars: Array<string>,
}

export const PillarList = () => {

    const {user} = useAuth();
    const [pillars,setpillars] = useState([])
    useEffect(() => {
      console.log('Firebase App:', app); // Check if the app object exists
    }, []);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <StatusBar style="light" />
            {/* <Text>pillar List</Text> */}
      
            {
                pillars.length > 0 ? (
                    <Text>pillars</Text>
                ):(
                    <Text>No pillars</Text>
                )
            }
            


        </View>
    )
}