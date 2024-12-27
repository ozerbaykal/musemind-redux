import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/dashboard';
import Tasks from '../screens/tasks';
import {ADDTASK, DASHBOARD, TASKS, UPDATETASK} from '../utils/routes';
import {Pressable, View} from 'react-native';
import {Notification, TaskSquare} from 'iconsax-react-native';
import {ThemeColors} from '../theme/colors';
import AddTask from '../screens/tasks/addTask';
import UpdateTask from '../screens/tasks/updateTask';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 22,
        },
        headerBackTitle: 'Back',
        headerTintColor: ThemeColors.black,
      })}>
      <Stack.Screen
        options={({route, navigation}) => ({
          headerRight: () => (
            <View style={{flexDirection: 'row', gap: 15}}>
              <Pressable>
                <Notification size={32} color={ThemeColors.black} />
              </Pressable>
              <Pressable onPress={() => navigation.navigate(TASKS)}>
                <TaskSquare size={32} color={ThemeColors.black} />
              </Pressable>
            </View>
          ),
        })}
        name={DASHBOARD}
        component={Dashboard}
      />
      <Stack.Screen name={TASKS} component={Tasks} />
      <Stack.Screen name={ADDTASK} component={AddTask} />
      <Stack.Screen name={UPDATETASK} component={UpdateTask} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
