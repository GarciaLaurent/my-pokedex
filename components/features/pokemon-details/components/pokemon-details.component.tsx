import { TPokemon } from 'components/types/types.type';
import { View } from 'react-native';
import { getBgColor } from 'utils/format-string.utils';

import { PokemonDetailsAbilitiesAndMoves } from './pokemon-details-abilities-moves.component';
import { PokemonDetailsProfile } from './pokemon-details-profile.component';
import { PokemonDetailsType } from './pokemon-details-type.component';

interface PokemonDetailsProps {
  pokemon: TPokemon;
}

export const PokemonDetails = (props: PokemonDetailsProps) => {
  const { pokemon } = props;
  const avatar = pokemon?.avatar;
  const color = getBgColor(pokemon?.types?.[0]?.type?.name);

  return (
    <View
      className="mb-2 w-full flex-1 items-center rounded-lg border-4 border-gray-300 p-4 shadow-2xl"
      style={{ backgroundColor: color }}>
      <PokemonDetailsProfile
        name={pokemon?.name}
        hp={pokemon?.hp}
        avatar={avatar}
        attack={pokemon?.attack}
        defense={pokemon?.defense}
      />
      <PokemonDetailsType types={pokemon?.types} />
      <PokemonDetailsAbilitiesAndMoves abilities={pokemon?.abilities} moves={pokemon?.moves} />
    </View>
  );
};
