export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Attack = {
  __typename: 'Attack';
  damage: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Mutation = {
  __typename: 'Mutation';
  favoritePokemon?: Maybe<Pokemon>;
  unFavoritePokemon?: Maybe<Pokemon>;
};


export type MutationFavoritePokemonArgs = {
  id: Scalars['ID'];
};


export type MutationUnFavoritePokemonArgs = {
  id: Scalars['ID'];
};

export type Pokemon = {
  __typename: 'Pokemon';
  attacks?: Maybe<PokemonAttack>;
  classification?: Maybe<Scalars['String']>;
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  evolutions: Array<Pokemon>;
  fleeRate?: Maybe<Scalars['Float']>;
  height?: Maybe<PokemonDimension>;
  id: Scalars['ID'];
  image: Scalars['String'];
  isFavorite: Scalars['Boolean'];
  maxCP?: Maybe<Scalars['Int']>;
  maxHP?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  number: Scalars['Int'];
  resistant?: Maybe<Array<Scalars['String']>>;
  sound: Scalars['String'];
  types?: Maybe<Array<Scalars['String']>>;
  weaknesses?: Maybe<Array<Scalars['String']>>;
  weight?: Maybe<PokemonDimension>;
};

export type PokemonAttack = {
  __typename: 'PokemonAttack';
  fast: Array<Attack>;
  special: Array<Attack>;
};

export type PokemonConnection = {
  __typename: 'PokemonConnection';
  count: Scalars['Int'];
  edges: Array<Pokemon>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type PokemonDimension = {
  __typename: 'PokemonDimension';
  maximum: Scalars['String'];
  minimum: Scalars['String'];
};

export type PokemonEvolutionRequirement = {
  __typename: 'PokemonEvolutionRequirement';
  amount: Scalars['Int'];
  name: Scalars['String'];
};

export type PokemonFilterInput = {
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

export type PokemonsQueryInput = {
  filter?: InputMaybe<PokemonFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename: 'Query';
  pokemonById?: Maybe<Pokemon>;
  pokemonByName?: Maybe<Pokemon>;
  pokemonNames: Array<Scalars['String']>;
  pokemonTypes: Array<Scalars['String']>;
  pokemons: PokemonConnection;
};


export type QueryPokemonByIdArgs = {
  id: Scalars['ID'];
};


export type QueryPokemonByNameArgs = {
  name: Scalars['String'];
};


export type QueryPokemonsArgs = {
  query: PokemonsQueryInput;
};

export type Root = {
  __typename: 'Root';
  query: Query;
};
