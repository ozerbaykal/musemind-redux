import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {useDispatch} from 'react-redux';
import {addNewTask} from '../../store/actions/tasksActions';
import {useNavigation} from '@react-navigation/native';
import {TASKS} from '../../utils/routes';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const saveTask = () => {
    const form = {
      id: Date.now(),
      title,
      date,
      status,
    };
    dispatch(addNewTask(form));

    Alert.alert('işlem başarılı');

    navigation.navigate(TASKS);
  };

  return (
    <View style={defaultScreenStyle.container}>
      <Input
        placeholder="add title"
        title="Task Title"
        value={title}
        onChangeText={value => setTitle(value)}
      />
      <Input
        placeholder="add date"
        title="Task Date"
        value={date}
        onChangeText={value => setDate(value)}
      />
      <Input
        placeholder="add status"
        title="Task Status"
        value={status}
        m
        onChangeText={value => setStatus(value)}
      />
      <Button onPress={() => saveTask()} title="kaydet" status="success" />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({});
