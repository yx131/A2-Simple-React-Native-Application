import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import MovieItem from './components/MovieItem';
import MovieInput from './components/MovieInput';

export default function App() {
  const [courseMovies, setCourseMovies] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addMovieHandler = MovieTitle => {
    setCourseMovies(currentMovies => [
      ...currentMovies,
      { id: Math.random().toString(), value: MovieTitle }
    ]);
    setIsAddMode(false);
  };

  const removeMovieHandler = MovieId => {
    setCourseMovies(currentMovies => {
      return currentMovies.filter(Movie => Movie.id !== MovieId);
    });
  };

  const cancelMovieAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add a movie to the list of movies seen" color='#F57409' onPress={() => setIsAddMode(true)} />
      <MovieInput
        visible={isAddMode}
        onAddMovie={addMovieHandler}
        onCancel={cancelMovieAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseMovies}
        renderItem={itemData => (
          <MovieItem
            id={itemData.item.id}
            onDelete={removeMovieHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});