import { MaterialIcons } from '@expo/vector-icons';
import { sortBy } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Text, View, Image } from 'react-native';
import { FlatList, RefreshControl, TextInput } from 'react-native-gesture-handler';

import { SearchPokemonItem } from './search-pokemon-items.component';
import { useSearchPokemon } from '../hooks/search-pokemon.hook';

export const SearchPokemon = () => {
  const inputRef = useRef<TextInput>(null);
  const [searchValue, setSearchValue] = useState('');
  const { data, isLoading, fetchPokemon } = useSearchPokemon();
  const [filteredData, setFilteredData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (data) {
      const sortedData = sortBy(data, ['id']);
      setFilteredData(sortedData);
    }
  }, [data]);

  const onChange = (value: string) => {
    setSearchValue(value);
    const dataFiltered = data.filter((item) => item?.name?.includes(value));
    setFilteredData(dataFiltered);
  };

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleBlur = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchPokemon();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View className="w-full flex-1 items-center">
      <View className="w-full items-center bg-[#CC0000] ">
        <Image
          source={{ uri: 'https://pokeapi.co/static/pokeapi_256.3fa72200.png' }}
          style={{ width: 150, height: 100 }}
          resizeMode="contain"
        />
      </View>
      <View className="w-full flex-1 p-4">
        <View className="h-12 w-full flex-row items-center rounded-full border-[1px] border-white bg-white px-4 pl-12 pr-9 text-black">
          <View className="absolute left-0 h-full items-center justify-center px-4 ">
            <MaterialIcons name="search" size={20} color="#B7B7B7" />
          </View>
          <TextInput
            ref={inputRef}
            keyboardType="default"
            placeholder="Rechercher"
            placeholderTextColor="#B7B7B7"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(value) => onChange(value)}
            value={searchValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
        <View className="mt-3 w-full flex-1 rounded-xl border-2 border-gray-100 bg-gray-600 p-4 shadow-2xl">
          <FlatList
            data={filteredData}
            renderItem={({ item, index }) => (
              <View key={item?.name?.toString() + '' + index?.toString()}>
                <SearchPokemonItem item={item} />
              </View>
            )}
            ItemSeparatorComponent={() => <View className="h-4" />}
            keyExtractor={(item, index) => index?.toString()}
            ListEmptyComponent={
              <View className="w-full flex-1 items-center justify-center">
                <Text className="text-center text-lg font-bold text-white">
                  Aucun pokémon ne correspond à votre recherche dans le pokédex
                </Text>
              </View>
            }
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />}
            refreshing={isRefreshing}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            ListFooterComponent={() => <View className="h-4" />}
          />
        </View>
      </View>
    </View>
  );
};
