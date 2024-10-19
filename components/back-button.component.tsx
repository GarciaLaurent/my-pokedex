import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export const BackButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable onPress={onPress}>
      <Feather name="chevron-left" size={40} color="#FFF" />
    </Pressable>
  );
};
