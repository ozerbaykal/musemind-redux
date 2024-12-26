import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FloatActionButton from '../../components/ui/floatActionButton';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import TaskItem from '../../components/tasks/taskItem';

const Tasks = () => {
  const {tasks} = useSelector(state => state.tasks);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListEmptyComponent={
          <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>
            Henüz bir iş eklemedi
          </Text>
        }
        data={tasks}
        renderItem={({item}) => <TaskItem item={item} />}
      />

      <FloatActionButton />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({});
