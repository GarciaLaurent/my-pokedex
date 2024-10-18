import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';

interface SearchPokemonItemProps {
  item: unknown;
}

export const SearchPokemonItem = (props: SearchPokemonItemProps) => {
  const { item } = props;
  const navigation = useNavigation();

  const handleOnPress = (item) => {
    navigation.navigate('PokemonDetailsScreen', {
      url: item?.url,
    });
  };

  return (
    <Pressable
      onPress={() => handleOnPress(item)}
      className="mr-2 rounded-md border-[1px] border-white bg-gray-300 p-2 active:bg-white">
      <Text className="font-bold ">{item?.name?.toUpperCase()}</Text>
    </Pressable>
  );
};
