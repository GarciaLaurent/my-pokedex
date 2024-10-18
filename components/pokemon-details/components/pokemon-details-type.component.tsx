import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useMemo, useRef, useState } from 'react';
import { View, Text, Image, Pressable, FlatList } from 'react-native';
import { capitalizedString, getBgColor } from 'utils/format-string.utils';

import { Pokemon } from '../hooks/pokemon-details.hook';
import { BottomSheetPokemonDetails } from './bottom-sheet/bottom-sheet-pokemon-details.component';

interface PokemonDetailsTypeProps {
  types: [];
  attack: string;
  defense: string;
}

export const PokemonDetailsType = (props: PokemonDetailsTypeProps) => {
  const { types, attack, defense } = props;

  return (
    <View className="w-full flex-row flex-wrap items-center">
      <View className="items-left flex-1 flex-row items-center">
        {types?.map(({ type, index }) => {
          return (
            <View
              key={type?.name + ' ' + index?.toString()}
              className="mr-1 rounded-md bg-gray-100 p-2 ">
              <Text className="text-center font-semibold">{capitalizedString(type?.name)}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
