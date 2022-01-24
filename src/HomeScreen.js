import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AddTODOModal from './components/AddTODOModal';
import Button from './components/Button';

import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const onPressHandler = () => {
    setModalVisible(true);
  };

  const findTodos = async () => {
    const result = await AsyncStorage.getItem('todo');
    if (result !== null) setTodos(JSON.parse(result));
  };

  const handleOnSubmit = async (title, description) => {
    const TODO = {id: Date.now(), title, description, time: Date.now()};
    // console.log(TODO);
    const updatedTODO = [...todos, TODO];
    await AsyncStorage.setItem('todo', JSON.stringify(updatedTODO));
  };

  useEffect(() => {
    findTodos();
  }, []);
  return (
    <View style={styles.container}>
      <Button title="Add new TODO" onPress={onPressHandler} />
      <AddTODOModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onsubmit={handleOnSubmit}
      />
      <FlatList
        data={todos}
        renderItem={({item}) => {
          return (
            <View style={styles.todoContainer}>
              <Text style={styles.todoTitle}>Title: {item.title}</Text>
              <Text style={styles.todoDesc}>
                Description: {item.description}
              </Text>
            </View>
          );
        }}
        style={{width: '100%', paddingHorizontal: '10%'}}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  todoContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#444444',
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default HomeScreen;
