import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

// Pokémon de 1ere génération (rouge et bleu) ;)
const ALL_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

export const useSearchPokemon = () => {
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(ALL_POKEMON_URL);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des Pokémon');
      }
      return response.json();
    } catch (error: any) {
      setError(error.message || 'Erreur inconnue');
      return [];
    }
  };

  // Queries
  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['fetchPokemon'],
    queryFn: fetchPokemon,
  });

  return { data: data?.results || [], isLoading, error, refetch, isFetching };
};
