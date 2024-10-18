import { View, Text, Image } from 'react-native';
import { capitalizedString } from 'utils/format-string.utils';

interface PokemonDetailsProfileProps {
  name: string;
  hp: string;
  avatar: string;
}

export const PokemonDetailsProfile = (props: PokemonDetailsProfileProps) => {
  const { avatar, name, hp } = props;

  return (
    <>
      <View className="w-full flex-row items-center justify-between">
        <View className="flex-1 flex-wrap">
          <Text className="text-xl font-bold">{capitalizedString(name)}</Text>
        </View>
        <View className="rounded-lg bg-gray-100 p-2">
          <Text className="text-center font-semibold">PV {hp}</Text>
        </View>
      </View>
      <View className="my-3 w-full items-center rounded-md border-2 border-orange-300 bg-white p-4">
        <Image source={{ uri: avatar }} style={{ width: 150, height: 150 }} resizeMode="contain" />
      </View>
    </>
  );
};
