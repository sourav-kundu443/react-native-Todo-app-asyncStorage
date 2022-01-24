import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({navigation, title, navigationScreen, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#03a5fc',
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
  },
});

export default Button;
