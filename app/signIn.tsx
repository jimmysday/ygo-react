import {Text, View, Button } from "react-native";
import { useAuth } from "@/context/authContext";

export default function StartPage() {

    const { login, user } = useAuth();

    const handleLogin= async()=>{
        console.log("handleLogin user: ", user);
        const response = await login("jimmyzhang@test.com","123456");
        if(!response.success){
            console.log("sign in error:", response.msg);
        }
        console.log("handleLogin user success: ", user);
    }

    return (
        <View
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            }}
        >
            <Text>Sign In</Text>
            <Button title="Sign in" onPress={handleLogin} />
        </View>
    );
}