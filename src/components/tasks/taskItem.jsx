import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/colors';
import {Calendar, Edit, More, Trash} from 'iconsax-react-native';
import {setColor} from '../../utils/functions';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../store/actions/tasksActions';
import {useNavigation} from '@react-navigation/native';
import {ADDTASK, UPDATETASK} from '../../utils/routes';

const TaskItem = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //task' ı silecek fonksiyon

  const deleteItem = () => {
    Alert.alert(
      'Silme Onayı', // Başlık
      'Silmek istediğinize emin misiniz?', // Mesaj
      [
        {
          text: 'Hayır',
          onPress: () => console.log('Silme işlemi iptal edildi'),
          style: 'cancel', // İptal butonu
        },
        {
          text: 'Evet',
          onPress: () => {
            // "Evet" seçildiğinde dispatch işlemini çağır
            dispatch(deleteTask(item.id));
          },
        },
      ],
      {cancelable: false}, // Kullanıcı boş bir yere dokunarak iptal edemesin
    );
  };

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
              padding: 10,

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

      <View style={{flexDirection: 'row', gap: 10}}>
        <TouchableOpacity onPress={deleteItem}>
          <Trash variant="Outline" size={25} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(UPDATETASK, {task: item})}>
          <Edit variant="Outline" size={25} />
        </TouchableOpacity>
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
