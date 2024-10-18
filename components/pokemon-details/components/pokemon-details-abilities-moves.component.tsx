import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useMemo, useRef, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { capitalizedString } from 'utils/format-string.utils';

import { BottomSheetPokemonDetails } from './bottom-sheet/bottom-sheet-pokemon-details.component';

interface PokemonDetailsAbilitiesAndMovesProps {
  abilities: [];
  moves: [];
}

export const PokemonDetailsAbilitiesAndMoves = (props: PokemonDetailsAbilitiesAndMovesProps) => {
  const { abilities, moves } = props;

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['20%'], []);
  const [url, setUrl] = useState<string>('');

  const handleOnPress = (item) => {
    setUrl(item?.move?.url);
    bottomSheetModalRef.current?.present();
  };

  return (
    <>
      <View className="mt-4 w-full flex-1 bg-gray-100 p-2">
        <View className="mb-4 w-full flex-wrap">
          <Text className="mb-1 font-bold">Abilities:</Text>
          <View className="flex-row flex-wrap">
            {abilities?.map(({ ability, index }) => {
              return (
                <View
                  key={ability?.name + ' ' + index?.toString()}
                  className="mr-1 rounded-md bg-gray-300 p-2 ">
                  <Text className="text-center font-semibold">
                    {capitalizedString(ability?.name)}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        <View className="w-full flex-1 flex-wrap">
          <Text className="mb-1 font-bold">Moves:</Text>
          <FlatList
            data={moves}
            numColumns={3}
            renderItem={({ item, index }) => (
              <View
                className={`${index % 3 !== 0 ? `pl-1` : 'pr-1'} w-1/3`}
                key={item?.move?.name + ' ' + index?.toString()}>
                <Pressable
                  onPress={() => handleOnPress(item)}
                  className="mb-1 mr-1 rounded-md border-[1px] border-orange-400 bg-orange-200 p-2 active:bg-orange-100">
                  <Text className="text-center font-bold" numberOfLines={1}>
                    {capitalizedString(item?.move?.name)}
                  </Text>
                </Pressable>
              </View>
            )}
            ItemSeparatorComponent={() => <View className="h-2" />}
            keyExtractor={(item, index) => index?.toString()}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            ListFooterComponent={() => <View className="h-2" />}
          />
        </View>
      </View>
      <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints}>
        <BottomSheetPokemonDetails url={url} />
      </BottomSheetModal>
    </>
  );
};
