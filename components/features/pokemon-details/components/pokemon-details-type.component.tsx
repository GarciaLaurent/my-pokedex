import { TTypes } from 'components/types/types.type';
import { View, Text } from 'react-native';
import { capitalizedString } from 'utils/format-string.utils';

interface PokemonDetailsTypeProps {
  types: TTypes[];
}

export const PokemonDetailsType = (props: PokemonDetailsTypeProps) => {
  const { types } = props;

  return (
    <View className="w-full flex-row flex-wrap items-center">
      <View className="items-left flex-1 flex-row items-center">
        {types?.map(({ type }, index) => {
          return (
            <View key={index?.toString()} className="mr-1 rounded-md bg-gray-100 p-2 ">
              <Text className="text-center font-semibold">{capitalizedString(type?.name)}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
