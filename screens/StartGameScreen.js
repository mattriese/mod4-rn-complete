import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);

  const numberInputHandler = (inputText) => {
    console.log('inputText::::', inputText);
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  function resetInputHandler() {
    setEnteredValue('');
    setConfirmed(false);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Number must be between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  }

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" onPress={() => {}} />
      </Card>
      // <View style={styles.result}>
      //   <View style={styles.output}>
      //     <Text style={styles.outputText}>Chosen Number: {selectedNumber}</Text>
      //   </View>
      //   <View style={styles.startGame}>
      //     <Button
      //       color={Colors.primary}
      //       style={styles.startGameButton}
      //       title="Start Game"
      //       onPress={() => {}}
      //     />
      //   </View>
      // </View>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 90,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  // result: {
  //   marginVertical: 15,
  //   alignItems: 'center',
  // },
  // output: {
  //   padding: 20,
  // },
  // outputText: {
  //   fontSize: 18,
  // },
  // startGame: {
  //   width: 150,
  // },
});
