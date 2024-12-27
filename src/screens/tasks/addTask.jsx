import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';

const AddTask = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Input placeholder="add title" title="Task Title" />
      <Input placeholder="add date" title="Task Date" />
      <Input placeholder="add status" title="Task Status" />
      <Button onPress={() => {}} title="kaydet" status="success" />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({});
