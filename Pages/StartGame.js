import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import Colors from "../Utils/Fonts/Colors/Colors";
import Title from "../Components/UI/Title";
import Card from "../Components/UI/Card";
import Btn from "../Components/UI/Btn";
export default function StartGame({ setUserInput, userInput, setValid}) {
    function getNumber(enteredNumber) {
        setUserInput(enteredNumber);
    }
    function resetNumber() {
        setUserInput('');
    }
    function isValid(userInput) {
        const number = parseInt(userInput);
        if (number > 0 && number < 99) {
            setValid(true);
        }
        else {
          Alert.alert(
            "Wrong Input",
            "Please Enter a Number between 0 and 99",
          );
        }
      }

    return (
        <View style={styles.container}>
            <Title>Guess My Number</Title>
            <Card>
                <Text style={styles.header}>Enter a Number</Text>
                <TextInput style={styles.input} keyboardType='number-pad' maxLength={2} value={userInput} onChangeText={getNumber} />
                <View style={styles.buttonsContainer}>
                    <Btn isPressed={resetNumber}>Reset</Btn>
                    <Btn isPressed={()=>isValid(userInput)}>Confirm</Btn>
                </View>
            </Card>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: Colors.secondary500,
        fontSize: 18,
    },
    input: {
        padding: 5,
        width: 50,
        textAlign: 'center',
        marginVertical: 10,
        borderBottomColor: Colors.secondary500,
        borderBottomWidth: 1,
        color: Colors.secondary500,
        fontFamily: 'open-sans',
        fontSize: 20
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 16
    }
});