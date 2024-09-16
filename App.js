import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import Task from './Component/task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const delTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrap}>
        <Text style={styles.title}>Tasks</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => { 
              return(
                <TouchableOpacity key={index}  onPress={() => delTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
              
            })
          }
        </View>
      </ View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrap}>
        
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}></TextInput>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrap}>
            <Text style={styles.addText}>Add</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b5dcc2',
  },
  taskWrap: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#647b6c',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrap: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#e1f1e6',
    borderRadius: 60,
    borderColor: '#90b09b',
    borderWidth: 1,
    width: 250,
  },
  addWrap: {
    width: 60,
    height: 60,
    backgroundColor: '#e1f1e6',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#90b09b',
    borderWidth: 1,
  },
  addText: {
    color: '#647b6c',
  },
});
