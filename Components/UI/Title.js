import { View, Text, StyleSheet } from "react-native";
import Colors from "../../Utils/Fonts/Colors/Colors";

export default function Title({ children }) {
    return (
        <View style={style.container}>
            <Text style={style.header}>{children}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.secondary500,
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20
    },
    header: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: Colors.secondary500
    }
})