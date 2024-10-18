import { BottomSheetView } from '@gorhom/bottom-sheet';
import { usePokemonMoves } from 'components/pokemon-details/hooks/pokemon-move.hook';
import { ActivityIndicator, Text, View } from 'react-native';
import { capitalizedString } from 'utils/format-string.utils';

interface PokemonDetailsProps {
  url: string;
}

export const BottomSheetPokemonDetails = (props: PokemonDetailsProps) => {
  const { url } = props;
  const { data, isLoading } = usePokemonMoves({ url });

  if (isLoading) {
    return (
      <View className="w-full flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <BottomSheetView className="w-full flex-1 items-center px-4">
      <View className="w-full items-center">
        <View className="mb-6">
          <Text className="mb-2 text-center text-3xl font-bold ">
            " {capitalizedString(data?.name)} "
          </Text>
          <View className="flex-row flex-wrap">
            <Text className="text-center font-semibold italic">
              {data?.descriptions?.[0]?.short_effect}
            </Text>
          </View>
        </View>
        <View className="w-full flex-row justify-center">
          {data?.power && (
            <Text className="mr-3 text-center font-semibold ">Power: {data?.power}</Text>
          )}
          {data?.pp && (
            <Text className="mr-3 text-center font-semibold ">Power points: {data?.pp}</Text>
          )}
          {data?.accuracy && (
            <Text className="mr-3 text-center font-semibold ">Accuracy: {data?.accuracy}</Text>
          )}
        </View>
      </View>
    </BottomSheetView>
  );
};
