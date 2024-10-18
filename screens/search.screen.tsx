import { Container } from 'components/container-layout.component';
import { SearchPokemon } from 'components/search/components/search-pokemon.component';
import { View } from 'react-native';

export const SearchScreen = () => {
  return (
    <Container>
      <View className="flex-1 bg-[#4a70bd] md:mx-auto ">
        <SearchPokemon />
      </View>
    </Container>
  );
};
