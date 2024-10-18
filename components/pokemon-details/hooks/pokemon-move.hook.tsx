import { useEffect, useState } from 'react';

export interface PokemonMovesParams {
  url: string;
}

export type Move = {
  id: string;
  name: string;
  power: string;
  pp: string;
  accuracy: string;
  descriptions: [];
};

export const usePokemonMoves = (props: PokemonMovesParams) => {
  const { url } = props;
  const [data, setData] = useState<unknown>(null);
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

      const move: Move = {
        id: result?.id,
        name: result?.name,
        power: result?.power,
        pp: result?.pp,
        accuracy: result?.accuracy,
        descriptions: result?.effect_entries,
      };
      setData(move);
    } catch (error: unknown) {
      setError(error?.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error };
};
