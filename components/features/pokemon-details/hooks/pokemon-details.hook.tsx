import { TPokemon } from 'components/types/types.type';
import { useEffect, useState } from 'react';

export interface SearchPokemonParams {
  url: string;
}

export const usePokemonDetails = (props: SearchPokemonParams) => {
  const { url } = props;
  const [pokemonDetail, setPokemonDetail] = useState<TPokemon | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPokemonDetails();
  }, [url]);

  const fetchPokemonDetails = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      const pokemon: TPokemon = {
        id: result?.id,
        avatar:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
          result?.id +
          '.png',
        name: result?.name,
        hp: result?.stats?.[0]?.base_stat,
        attack: result?.stats?.[1]?.base_stat,
        defense: result?.stats?.[2]?.base_stat,
        abilities: result?.abilities,
        moves: result?.moves,
        types: result?.types,
      };

      setPokemonDetail(pokemon);
    } catch (error: any) {
      setError(error?.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { pokemonDetail, isLoading, error };
};
