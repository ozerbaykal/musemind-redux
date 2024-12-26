import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/colors';
import {Calendar, More} from 'iconsax-react-native';
import {setColor} from '../../utils/functions';

const TaskItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'space-around'}}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
          <View
            style={{
              backgroundColor: setColor(item.status),
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 8,

              borderRadius: 100,
            }}>
            <Text style={{color: ThemeColors.white, fontWeight: '500'}}>
              {item.status}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <Calendar variant="Outline" size={20} />
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>

      <View>
        <More variant="Outline" size={25} />
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.7,
    borderRadius: 8,
    marginVertical: 5,
    padding: 10,
    borderColor: ThemeColors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 140,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  date: {
    fontSize: 16,
    fontWeight: '400',
  },
});
