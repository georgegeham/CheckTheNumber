import { View, Text, StyleSheet, TextInput } from "react-native";
import Btn from "./Btn";
import Colors from "../../Utils/Fonts/Colors/Colors";
export default function Card({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        gap: 10,
        backgroundColor: Colors.primary700,
        padding: 30,
        width: '80%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})