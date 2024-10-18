import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';

import { BackButton } from './back-button.component';

export const HeaderLayout = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full flex-row items-center">
      <BackButton onPress={navigation.goBack} />
      <Text className="text-center text-2xl font-bold text-white">Fiche du Pokémon</Text>
    </View>
  );
};
