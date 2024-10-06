import { View, Text, StyleSheet } from "react-native";
import Colors from "../../Utils/Fonts/Colors/Colors";

export default function Log({order , number}){
    // console.log(`The order is ${order} and the Number is ${number}`);
    return(
        <View style={styles.container}>
            <Text style={styles.order}>#{order}</Text>
            <Text style={styles.number}>Opponent Guess: <Text style={{fontFamily: 'open-sans-bold'}}>{number}</Text></Text>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        container:{
            width: '80%',
            marginHorizontal: 'auto',
            padding: 13,
            backgroundColor: Colors.secondary500,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 6,
            borderRadius: 30
        },
        order:{
            fontFamily: 'open-sans',
        },
        number:{
            fontFamily: 'open-sans',

        }

    }
)