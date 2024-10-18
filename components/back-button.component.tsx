import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

export const BackButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <View className={styles.backButton}>
      <Pressable onPress={onPress}>
        <Feather name="chevron-left" size={50} color="#FFF" />
      </Pressable>
    </View>
  );
};

const styles = {
  backButton: 'flex-row',
  backButtonText: 'text-blue-500 ml-1',
};
