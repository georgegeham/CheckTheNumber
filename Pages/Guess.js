import { View, Text , StyleSheet, Alert, FlatList } from "react-native";
import {useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Title from "../Components/UI/Title";
import Card from "../Components/UI/Card";
import Btn from "../Components/UI/Btn";
import Colors from "../Utils/Fonts/Colors/Colors";
import Log from "../Components/UI/Log";
let min=1 , max=100;
export default function Guess({generatedNumber , setGeneratedNumber , userInput, setFinished , log , setLog}) {
	function generate(min , max , exclude){
		const newNumber = Math.floor((Math.random() * (max-min))) + min;
		if(newNumber === exclude)
			generate(min, max, exclude);
		else{
			// console.log(`The min is ${min} , The max is ${max} , The new Number is ${newNumber}`);
			// console.log(typeof(generatedNumber))
			setGeneratedNumber(newNumber)
			setLog(prevLog => [
				{
					index : (prevLog.length + 1),
					number : newNumber,
				},
				...prevLog
			])
		}
	}
	function reGenerate(anchor){
		if(anchor === 'lower'){
			if(generatedNumber < userInput){
				min = generatedNumber + 1;
				generate(min , max , generatedNumber);
			}
			else{
				Alert.alert('Don\'t Lie' , 'The Generated Number isn\'t lower Than The Entered Number' , [{text: 'Ok' , style: 'destructive'}])
			}
		}
		else{
			if(generatedNumber > userInput){
				max = generatedNumber;
				generate(min , max , generatedNumber);
			}
			else{
				Alert.alert('Don\'t Lie' , 'The Generated Number isn\'t Higher Than The Entered Number' , [{text: 'Ok' , style: 'destructive'}])
			}
		}
	}
	useEffect(()=>{
		if(generatedNumber===userInput){
			// console.log('Bingo');
			setFinished(true);
		}
	},[generatedNumber , userInput])
	useEffect(()=>{
		min=1,
		max=100,
		generate(min , max , userInput)
	},[])
    return (
        <View style={styles.container}>
                <Title style={styles.generatedNumber}>Opponent's Guess</Title>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>{generatedNumber}</Text>
            </View>
            <Card>
                <Text style={styles.header}>Higher or Lower?</Text>
                <View style={styles.btnContaienr}>
                    <Btn isPressed={()=>reGenerate('lower')}><Ionicons name="remove" size={20} color={Colors.primary900} /></Btn>
                    <Btn isPressed={()=>reGenerate('higher')}><Ionicons name="add" size={20} color={Colors.primary900} /></Btn>
                </View>
            </Card>
			<View style={styles.listContainer}>
				<FlatList data={log} renderItem={item => <Log order={item.item.index} number={item.item.number}/>} />
			</View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50,
        gap: 20
    },
    numberContainer:{   
        width: '40%',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: Colors.secondary500,
        borderRadius: 5,
    },
    number:{
        fontFamily: 'open-sans-bold',
        color: Colors.secondary500,
        fontSize: 30,
        paddingVertical: 30,
        textAlign: 'center'
    },
	btnContaienr:{
		flexDirection: 'row',
		gap: 16
	},
	header:{
		marginBottom: 10,
		color : Colors.secondary500,
		fontFamily: 'open-sans-bold',
		fontSize: 18
	},
	listContainer:{
		flex: 1,
		alignItems: 'center',
	}
})