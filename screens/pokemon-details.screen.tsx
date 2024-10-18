import { Container } from 'components/container-layout.component';
import { HeaderLayout } from 'components/header-layout.component';
import { PokemonDetails } from 'components/pokemon-details/components/pokemon-details.component';
import { usePokemonDetails } from 'components/pokemon-details/hooks/pokemon-details.hook';
import { View, ActivityIndicator } from 'react-native';

interface Props {
  route: {
    params?: {
      url: string;
    };
  };
}

export const PokemonDetailsScreen = ({ route }: Props) => {
  const url = route?.params?.url;

  const { pokemonDetail, isLoading } = usePokemonDetails({ url });

  if (isLoading) {
    return (
      <View className="w-full flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Container>
      <HeaderLayout />
      <View className="flex-1 bg-[#4a70bd] p-3 md:mx-auto ">
        <PokemonDetails pokemon={pokemonDetail} />
      </View>
    </Container>
  );
};
