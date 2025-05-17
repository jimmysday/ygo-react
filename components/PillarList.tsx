import { View, Text } from "react-native";
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type props = {
    pillars: Array<string>,
}

export const PillarList = ({pillars}: props) => {
    return (
        <View>
            <Text>pillar List</Text>
        </View>
    )
}