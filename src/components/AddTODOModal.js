import React, {useState} from 'react';
import {
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Button from './Button';

const AddTODOModal = ({visible, onClose, onsubmit}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!title.trim() && !description.trim()) return onClose();
    onsubmit(title, description);
    setTitle('');
    setDescription('');
    onClose();
  };

  const onChangeHandler = (text, valueFor) => {
    {
      valueFor === 'title' ? setTitle(text) : setDescription(text);
    }
  };
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.container}>
        <View style={styles.inputField}>
          <TextInput
            value={title}
            onChangeText={text => {
              onChangeHandler(text, 'title');
            }}
            style={(styles.textInput, styles.title)}
            placeholder="Title"
            placeholderTextColor="#333"
          />
        </View>
        <View style={styles.inputField}>
          <TextInput
            value={description}
            multiline
            onChangeText={text => {
              onChangeHandler(text, 'desc');
            }}
            style={(styles.textInput, styles.description)}
            placeholder="Description"
            placeholderTextColor="#333"
          />
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={[styles.todoBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
        <Button title="ADD" onPress={handleSubmit} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  inputField: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#545454',
    borderRadius: 10,
    marginVertical: '4%',
  },
  textInput: {
    fontSize: 18,
    fontWeight: '500',
  },
  title: {},
  description: {
    height: 100,
  },
  todoBG: {
    flex: 1,
    zIndex: -1,
    backgroundColor: '#fff',
  },
});

export default AddTODOModal;
