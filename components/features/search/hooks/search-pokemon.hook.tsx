import { useEffect, useState } from 'react';

// Pokémon de 1ere génération (rouge et bleu) ;)
const ALL_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

export const useSearchPokemon = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(ALL_POKEMON_URL);
      const result = await response.json();
      const results = result?.results ?? [];
      setData(results);
    } catch (error: any) {
      setError(error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, fetchPokemon };
};
