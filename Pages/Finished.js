import { View, Text, StyleSheet , Image } from "react-native";
import Title from "../Components/UI/Title";
import Colors from "../Utils/Fonts/Colors/Colors";
import Btn from "../Components/UI/Btn";

export default function Finished({length , number , newGame}){
    return(
        <View style={styles.container}>
            <Title>Game Over!</Title>
            <View style={styles.imgContaienr}>
            <Image source={require('../assets/Images/success.png')} style={styles.image}/>
            </View>
            <Text style={styles.text}>Your Phone needed <Text style={{color: Colors.primary900}}>{length}</Text> rounds to guess the number <Text style={{color: Colors.primary900}}>{number}</Text></Text>
            <Btn style={styles.btn} isPressed={newGame}>New Game</Btn>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    imgContaienr:{
        width: 300,
        height: 300,
        borderRadius: 150,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: Colors.secondary500
    },
    image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    text:{
        color: Colors.secondary500,
        width: '80%',
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        padding: 10,
        textAlign: 'center'
    },
    btn:{
        flex: 0,
    }
})