import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../Utils/Fonts/Colors/Colors";

export default function Btn({ children, isPressed ,style }) {
    return (
        <View style={[styles.container , style]}>
            <Pressable style={({ pressed }) => pressed ? [styles.btn, styles.op] : styles.btn} android_ripple={{ color: Colors.primary900 }} onPress={isPressed}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            borderRadius: 10,
        },
        btn: {
            padding: 10,
            borderRadius: 5,
            backgroundColor: Colors.secondary500,
        },
        op: {
            opacity: 0.4,
        },
        text: {
            fontFamily: 'open-sans',
            textAlign: 'center',
            color: Colors.primary900

        }
    }
)