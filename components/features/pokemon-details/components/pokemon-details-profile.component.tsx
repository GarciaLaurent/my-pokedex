import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, Image } from 'react-native';
import { capitalizedString } from 'utils/format-string.utils';

interface PokemonDetailsProfileProps {
  name: string;
  hp: string;
  avatar: string;
  attack: string;
  defense: string;
}

export const PokemonDetailsProfile = (props: PokemonDetailsProfileProps) => {
  const { avatar, name, hp, attack, defense } = props;

  return (
    <>
      <View className="w-full flex-row items-center justify-between">
        <View className="flex-1 flex-wrap">
          <Text className="text-2xl font-bold ">{capitalizedString(name)}</Text>
          <View className="mt-2 w-full flex-row flex-wrap items-center">
            <View className="items-left flex-1 flex-row items-center">
              <View className="mr-4 flex-row items-center">
                <MaterialCommunityIcons name="sword" size={18} color="#f3f4f6" />
                <View className="ml-1 flex-row items-center justify-center rounded-full bg-gray-100 p-1 ">
                  <Text className="text-center text-xs font-semibold">{attack}</Text>
                </View>
              </View>
              <View className="flex-row items-center">
                <FontAwesome name="shield" size={18} color="#f3f4f6" />
                <View className="ml-1 flex-row items-center justify-center rounded-full bg-gray-100 p-1 ">
                  <Text className="text-center text-xs font-semibold ">{defense}</Text>
                </View>
              </View>
            </View>
          </View>
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
