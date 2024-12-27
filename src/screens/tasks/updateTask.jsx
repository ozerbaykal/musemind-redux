import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {useDispatch} from 'react-redux';
import {updateTask} from '../../store/actions/tasksActions';
import {useNavigation} from '@react-navigation/native';
import {TASKS} from '../../utils/routes';

const UpdateTask = ({route}) => {
  const task = route?.params.task; //güncellencek olan taskı aldık

  const [title, setTitle] = useState(task?.title || '');
  const [date, setDate] = useState(task?.date || '');
  const [status, setStatus] = useState(task?.status || '');

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleUpdate = () => {
    const form = {
      id: task.id,
      title,
      date,
      status,
    };
    dispatch(updateTask(form));

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
      <Button
        onPress={() => handleUpdate()}
        title="Güncelle"
        status="On Hold"
      />
    </View>
  );
};

export default UpdateTask;

const styles = StyleSheet.create({});
