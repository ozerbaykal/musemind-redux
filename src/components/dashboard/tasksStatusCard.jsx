import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TasksStatusCard = ({item}) => {
  return (
    <View style={[styles.container, {backgroundColor: item.color}]}>
      <Text>tasksStatusCard</Text>
    </View>
  );
};

export default TasksStatusCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },
});
