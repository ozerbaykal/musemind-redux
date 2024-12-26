import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ThemeColors} from '../../theme/colors';
import {Add} from 'iconsax-react-native';

const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size={40} />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeColors.green,
    width: 80,
    height: 80,
    borderRadius: 50,
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
});
