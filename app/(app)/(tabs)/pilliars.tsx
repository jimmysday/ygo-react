import { Text, View } from "react-native";
import { useEffect,useState } from "react";
import { app } from "@/firebaseConfig";
import { StatusBar } from 'expo-status-bar'
import { useAuth } from '@/context/authContext'
import { PillarList} from '@/components/PillarList'

export default function Pillars() {

  const {user} = useAuth();
  const [pillars,setUpillars] = useState([])
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
      <Text>Pillars.</Text>
      {
        pillars.length > 0 ? (
          <PillarList pillars={pillars} />
        ):(
          <Text>No users</Text>
        )
      }
      
    </View>
  );
}