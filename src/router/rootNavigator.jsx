import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/dashboard';
import Tasks from '../screens/tasks';
import {DASHBOARD, TASKS} from '../utils/routes';
import {Pressable} from 'react-native';
import {Notification} from 'iconsax-react-native';
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
          <Pressable>
            <Notification size={32} color={ThemeColors.black} />
          </Pressable>
        ),
      })}>
      <Stack.Screen name={DASHBOARD} component={Dashboard} />
      <Stack.Screen name={TASKS} component={Tasks} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
