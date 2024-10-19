export interface TPokemon {
  id: string;
  avatar: string;
  name: string;
  hp: string;
  attack: string;
  defense: string;
  abilities: TAbility[];
  moves: TMove[];
  types: TTypes[];
}

export interface TAbility {
  ability: {
    name: string;
    url: string;
  };
}
export interface TMove {
  move: {
    name: string;
    url: string;
  };
}
export interface TMoveDetails {
  id: string;
  name: string;
  power: string;
  pp: string;
  accuracy: string;
  effect_entries: TEffectEntries[];
}
export interface TEffectEntries {
  short_effect: string;
}
export interface TTypes {
  type: {
    name: string;
  };
}

export interface TSearchPokemon {
  name: string;
  url: string;
}
