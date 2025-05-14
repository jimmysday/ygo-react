import { View, StatusBar, Text } from "react-native" 

export default function SplashScreen ()
{
    return (
        <View
            style = {{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <StatusBar barStyle='light-content' />
        </View>        
    );
}