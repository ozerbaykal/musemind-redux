import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/dashboard';
import Tasks from '../screens/tasks';
import {DASHBOARD, TASKS} from '../utils/routes';
import {Pressable, View} from 'react-native';
import {Notification, TaskSquare} from 'iconsax-react-native';
import {ThemeColors} from '../theme/colors';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 22,
        },

        headerRight: () => (
          <View style={{flexDirection: 'row', gap: 15}}>
            <Pressable>
              <Notification size={32} color={ThemeColors.black} />
            </Pressable>
            <Pressable>
              <TaskSquare size={32} color={ThemeColors.black} />
            </Pressable>
          </View>
        ),
      })}>
      <Stack.Screen name={DASHBOARD} component={Dashboard} />
      <Stack.Screen name={TASKS} component={Tasks} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
