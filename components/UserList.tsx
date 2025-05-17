import { View, Text } from "react-native";
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type props = {
    users: Array<string>,
}

export const UserList = ({users}: props) => {
    return (
        <View>
            <Text>users List</Text>
        </View>
    )
}