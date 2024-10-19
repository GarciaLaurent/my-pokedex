import { TMoveDetails } from 'components/types/types.type';
import { useEffect, useState } from 'react';

export interface PokemonMovesParams {
  url: string;
}

export const usePokemonMoves = (props: PokemonMovesParams) => {
  const { url } = props;
  const [data, setData] = useState<TMoveDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPokemonMoves();
  }, [url]);

  const fetchPokemonMoves = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      const move: TMoveDetails = {
        id: result?.id,
        name: result?.name,
        power: result?.power,
        pp: result?.pp,
        accuracy: result?.accuracy,
        effect_entries: result?.effect_entries,
      };
      setData(move);
    } catch (error: any) {
      setError(error?.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error };
};
