import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MoreCircle} from 'iconsax-react-native';

const TasksStatusCard = ({item, value}) => {
  return (
    <View style={[styles.container, {backgroundColor: item.color}]}>
      <View>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
      <View>
        <Pressable>
          <MoreCircle size="32" />
        </Pressable>
      </View>
    </View>
  );
};

export default TasksStatusCard;

const styles = StyleSheet.create({
  container: {
    width: '47%',
    height: 170,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 30,
  },
  status: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
});
