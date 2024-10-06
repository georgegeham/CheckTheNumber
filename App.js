import {ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import { useState} from 'react';
import Finished from './Pages/Finished';
import StartGame from './Pages/StartGame';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './Utils/Fonts/Colors/Colors';
import Guess from './Pages/Guess';
export default function App() {
  //font
  const [loaded] = useFonts({
    'open-sans': require('./Utils/Fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./Utils/Fonts/OpenSans-Bold.ttf')
  });
  //States
  const [userInput, setUserInput] = useState();
  const [valid , setValid] = useState(false);
  const [generatedNumber , setGeneratedNumber] = useState(0);
  const [finished , setFinished] = useState(false);
  const [log , setLog] = useState([]);
  let screen = <StartGame setUserInput={setUserInput} userInput={userInput} setValid={setValid}/>
  //Functions
  function newGame(){
    setUserInput();
    setValid(false);
    setGeneratedNumber(0);
    setFinished(false);
    setLog([]);
  }
  if(valid){screen = <Guess generatedNumber={generatedNumber} setGeneratedNumber={setGeneratedNumber} userInput={parseInt(userInput)} setFinished={setFinished} setLog={setLog} log={log}/>}
  if(finished){
    // console.log(finished);
    screen = <Finished length={log.length} number={userInput} newGame={newGame}/>;
  }
  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.primary700, Colors.primary500, Colors.primary900]} style={styles.container} >
        <ImageBackground source={require('./assets/Images/background.png')} style={styles.container} resizeMode='cover' imageStyle={styles.background}>
          <SafeAreaView style={[styles.container]}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    opacity: 0.15
  }
});
