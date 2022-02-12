import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const MovieInput = props => {
  const [EnteredMovie, setEnteredMovie] = useState('');

  const movieInputHandler = enteredText => {
    setEnteredMovie(enteredText);
  };

  const addMovieHandler = () => {
    props.onAddMovie(EnteredMovie);
    setEnteredMovie('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a Movie"
          style={styles.input}
          onChangeText={movieInputHandler}
          value={EnteredMovie}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="add a movie" color='#6EB634' onPress={addMovieHandler} />
          </View>
          <View style={styles.button}>
            <Button title="back" color="#D15656" onPress={props.onCancel} />
          </View>
          
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default MovieInput;
