import { MaterialIcons } from '@expo/vector-icons';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { TAbility, TMove } from 'components/types/types.type';
import { useMemo, useRef, useState } from 'react';
import { View, Text, Pressable, Platform, Modal } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { capitalizedString } from 'utils/format-string.utils';

import { BottomSheetPokemonDetails } from './bottom-sheet/bottom-sheet-pokemon-details.component';

interface PokemonDetailsAbilitiesAndMovesProps {
  abilities: TAbility[];
  moves: TMove[];
}

export const PokemonDetailsAbilitiesAndMoves = (props: PokemonDetailsAbilitiesAndMovesProps) => {
  const { abilities, moves } = props;
  const isWeb = Platform.OS === 'web';
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['25%'], []);
  const [url, setUrl] = useState<string>('');
  const [modal, setModal] = useState(false);

  const handleOnPress = (item: TMove) => {
    setUrl(item?.move?.url);
    if (isWeb) {
      setModal(true);
    } else {
      bottomSheetModalRef.current?.present();
    }
  };

  return (
    <>
      <View className="mt-4 w-full flex-1 bg-gray-100 p-1">
        <View className="mb-4 w-full flex-wrap">
          <Text className="mb-1 font-bold">Abilities:</Text>
          <View className="flex-row flex-wrap">
            {abilities?.map(({ ability }, index) => {
              return (
                <View key={index?.toString()} className="mr-1 rounded-md bg-gray-300 p-2 ">
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
            numColumns={2}
            renderItem={({ item, index }) => (
              <View
                className={`${index % 2 !== 0 ? `pl-1` : 'pr-1'} w-1/2`}
                key={index?.toString()}>
                <Pressable
                  onPress={() => handleOnPress(item)}
                  className="mb-1 rounded-md border-[1px] border-orange-400 bg-orange-200 p-1 active:bg-orange-100">
                  <Text className="text-center font-bold" numberOfLines={1}>
                    {capitalizedString(item?.move?.name)}
                  </Text>
                </Pressable>
              </View>
            )}
            ItemSeparatorComponent={() => <View className="h-2" />}
            keyExtractor={(index) => index?.toString()}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            ListFooterComponent={() => <View className="h-2" />}
          />
        </View>
      </View>
      {isWeb ? (
        <Modal
          animationType="fade"
          transparent
          visible={modal}
          onRequestClose={() => setModal(false)}>
          <View className="flex-1 items-center justify-center">
            <View className="items-center rounded-lg border-2 border-orange-400 bg-gray-300 p-2 sm:w-[100px] md:w-[400px] lg:w-[400px]">
              <BottomSheetPokemonDetails url={url} />
              <MaterialIcons
                name="close"
                size={24}
                color="white"
                className="absolute -right-2 -top-2 rounded-full border-[1px] border-white bg-red-600"
                onPress={() => setModal(false)}
              />
            </View>
          </View>
        </Modal>
      ) : (
        <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints}>
          <BottomSheetView className="w-full flex-1 items-center px-4">
            <BottomSheetPokemonDetails url={url} />
          </BottomSheetView>
        </BottomSheetModal>
      )}
    </>
  );
};
