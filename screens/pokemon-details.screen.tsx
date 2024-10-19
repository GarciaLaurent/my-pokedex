import { Container } from 'components/container-layout.component';
import { PokemonDetails } from 'components/features/pokemon-details/components/pokemon-details.component';
import { usePokemonDetails } from 'components/features/pokemon-details/hooks/pokemon-details.hook';
import { HeaderLayout } from 'components/header-layout.component';
import { View, ActivityIndicator } from 'react-native';

interface Props {
  route: {
    params: {
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
      {pokemonDetail && (
        <View className="flex-1 bg-[#99b4eb] p-3 sm:w-full md:w-[768px] lg:mx-auto lg:w-[1024px]">
          <PokemonDetails pokemon={pokemonDetail} />
        </View>
      )}
    </Container>
  );
};
