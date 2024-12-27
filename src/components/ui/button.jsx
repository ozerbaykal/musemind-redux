import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/colors';

const Button = props => {
  const {title, status} = props;

  const setColor = () => {
    switch (status) {
      case 'success':
        return ThemeColors.green;
      case 'warning':
        return ThemeColors.yellow;

      default:
        return ThemeColors.blue;
    }
  };

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: setColor()}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    paddingVertical: 15,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
});
