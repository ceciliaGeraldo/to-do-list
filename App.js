import React, { useState } from 'react';
import { View, Button, Text, FlatList, TouchableOpacity } from 'react-native';
import CustomModal from './src/components/modal/index';
import ListItem from './src/components/list-item/index';
import Input from './src/components/input/index';
import { styles } from './styles';

export default function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnChangeText = (text) => {
    setText(text);
  };

  const addItem = () => {
    if (text !== '') {
      setList((currentList) => [
        ...currentList,
        { id: Math.random(), value: text },
      ]);
      setText('');
    }
  };

  const onHandlerDelete = (id) => {
    setList((currentList) => currentList.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const onHandlerModal = (id) => {
    setItemSelected(list.filter((item) => item.id === id)[0]);
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }) => (
    <ListItem item={item} onPress={onHandlerModal} />
  );

  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Input
          placeholder='Nueva tarea'
          style={styles.input}
          placeholderTextColor='#333333'
          value={text}
          onChangeText={(text) => handleOnChangeText(text)}
        />
        <Button title='Añadir' onPress={() => addItem()} color='#3aa7a3' />
      </View>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
      />
      <CustomModal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => null}
      >
        <TouchableOpacity
          style={styles.modalContent}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>Eliminar tarea</Text>
          </View>
          <Text style={styles.modalText}>
            ¿Estás seguro que quieres eliminar esta tarea?
          </Text>
          <Text style={styles.modalMessage}>{itemSelected.value}</Text>
          <Button
            title='Está bien'
            onPress={() => onHandlerDelete(itemSelected.id)}
            color='#3aa7a3'
          />
        </TouchableOpacity>
      </CustomModal>
    </View>
  );
}
