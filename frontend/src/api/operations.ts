import * as Types from './types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AttackFragment = { __typename: 'Attack', damage: number, name: string, type: string };

export type DimensionFragment = { __typename: 'PokemonDimension', maximum: string, minimum: string };

export type FullPokemonFragment = { __typename: 'Pokemon', id: string, name: string, maxHP?: number | null, number: number, resistant?: Array<string> | null, sound: string, types?: Array<string> | null, weaknesses?: Array<string> | null, classification?: string | null, fleeRate?: number | null, image: string, isFavorite: boolean, maxCP?: number | null, attacks?: { __typename: 'PokemonAttack', fast: Array<{ __typename: 'Attack', damage: number, name: string, type: string }>, special: Array<{ __typename: 'Attack', damage: number, name: string, type: string }> } | null, weight?: { __typename: 'PokemonDimension', maximum: string, minimum: string } | null, height?: { __typename: 'PokemonDimension', maximum: string, minimum: string } | null, evolutionRequirements?: { __typename: 'PokemonEvolutionRequirement', amount: number, name: string } | null, evolutions: Array<{ __typename: 'Pokemon', id: string, name: string, image: string, isFavorite: boolean }> };

export type FavoritePokemonMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type FavoritePokemonMutation = { __typename: 'Mutation', favoritePokemon?: { __typename: 'Pokemon', id: string, name: string, maxHP?: number | null, number: number, resistant?: Array<string> | null, sound: string, types?: Array<string> | null, weaknesses?: Array<string> | null, classification?: string | null, fleeRate?: number | null, image: string, isFavorite: boolean, maxCP?: number | null, attacks?: { __typename: 'PokemonAttack', fast: Array<{ __typename: 'Attack', damage: number, name: string, type: string }>, special: Array<{ __typename: 'Attack', damage: number, name: string, type: string }> } | null, weight?: { __typename: 'PokemonDimension', maximum: string, minimum: string } | null, height?: { __typename: 'PokemonDimension', maximum: string, minimum: string } | null, evolutionRequirements?: { __typename: 'PokemonEvolutionRequirement', amount: number, name: string } | null, evolutions: Array<{ __typename: 'Pokemon', id: string, name: string, image: string, isFavorite: boolean }> } | null };

export type UnFavoritePokemonMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type UnFavoritePokemonMutation = { __typename: 'Mutation', unFavoritePokemon?: { __typename: 'Pokemon', id: string, name: string, maxHP?: number | null, number: number, resistant?: Array<string> | null, sound: string, types?: Array<string> | null, weaknesses?: Array<string> | null, classification?: string | null, fleeRate?: number | null, image: string, isFavorite: boolean, maxCP?: number | null, attacks?: { __typename: 'PokemonAttack', fast: Array<{ __typename: 'Attack', damage: number, name: string, type: string }>, special: Array<{ __typename: 'Attack', damage: number, name: string, type: string }> } | null, weight?: { __typename: 'PokemonDimension', maximum: string, minimum: string } | null, height?: { __typename: 'PokemonDimension', maximum: string, minimum: string } | null, evolutionRequirements?: { __typename: 'PokemonEvolutionRequirement', amount: number, name: string } | null, evolutions: Array<{ __typename: 'Pokemon', id: string, name: string, image: string, isFavorite: boolean }> } | null };

export type GetPokemonsListQueryVariables = Types.Exact<{
  query: Types.PokemonsQueryInput;
}>;


export type GetPokemonsListQuery = { __typename: 'Query', pokemons: { __typename: 'PokemonConnection', count: number, limit: number, offset: number, edges: Array<{ __typename: 'Pokemon', id: string, name: string, image: string, types?: Array<string> | null, isFavorite: boolean }> } };

export type GetAllPokemonNamesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllPokemonNamesQuery = { __typename: 'Query', pokemonNames: Array<string> };

export type GetAllPokemonTypesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllPokemonTypesQuery = { __typename: 'Query', pokemonTypes: Array<string> };

export type GetPokemonQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type GetPokemonQuery = { __typename: 'Query', pokemonByName?: { __typename: 'Pokemon', id: string, name: string, maxHP?: number | null, number: number, resistant?: Array<string> | null, sound: string, types?: Array<string> | null, weaknesses?: Array<string> | null, classification?: string | null, fleeRate?: number | null, image: string, isFavorite: boolean, maxCP?: number | null, attacks?: { __typename: 'PokemonAttack', fast: Array<{ __typename: 'Attack', damage: number, name: string, type: string }>, special: Array<{ __typename: 'Attack', damage: number, name: string, type: string }> } | null, weight?: { __typename: 'PokemonDimension', maximum: string, minimum: string } | null, height?: { __typename: 'PokemonDimension', maximum: string, minimum: string } | null, evolutionRequirements?: { __typename: 'PokemonEvolutionRequirement', amount: number, name: string } | null, evolutions: Array<{ __typename: 'Pokemon', id: string, name: string, image: string, isFavorite: boolean }> } | null };

export const namedOperations = {
  Query: {
    GetPokemonsList: 'GetPokemonsList',
    GetAllPokemonNames: 'GetAllPokemonNames',
    GetAllPokemonTypes: 'GetAllPokemonTypes',
    GetPokemon: 'GetPokemon'
  },
  Mutation: {
    FavoritePokemon: 'FavoritePokemon',
    UnFavoritePokemon: 'UnFavoritePokemon'
  },
  Fragment: {
    Attack: 'Attack',
    Dimension: 'Dimension',
    FullPokemon: 'FullPokemon'
  }
}
export const AttackFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Attack"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attack"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"damage"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<AttackFragment, unknown>;
export const DimensionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Dimension"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PokemonDimension"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maximum"}},{"kind":"Field","name":{"kind":"Name","value":"minimum"}}]}}]} as unknown as DocumentNode<DimensionFragment, unknown>;
export const FullPokemonFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPokemon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pokemon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"attacks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fast"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Attack"}}]}},{"kind":"Field","name":{"kind":"Name","value":"special"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Attack"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"maxHP"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"resistant"}},{"kind":"Field","name":{"kind":"Name","value":"sound"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"weaknesses"}},{"kind":"Field","name":{"kind":"Name","value":"weight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Dimension"}}]}},{"kind":"Field","name":{"kind":"Name","value":"height"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Dimension"}}]}},{"kind":"Field","name":{"kind":"Name","value":"classification"}},{"kind":"Field","name":{"kind":"Name","value":"fleeRate"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}},{"kind":"Field","name":{"kind":"Name","value":"maxCP"}},{"kind":"Field","name":{"kind":"Name","value":"evolutionRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"evolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}}]}}]}},...AttackFragmentDoc.definitions,...DimensionFragmentDoc.definitions]} as unknown as DocumentNode<FullPokemonFragment, unknown>;
export const FavoritePokemonDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FavoritePokemon"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"favoritePokemon"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPokemon"}}]}}]}},...FullPokemonFragmentDoc.definitions]} as unknown as DocumentNode<FavoritePokemonMutation, FavoritePokemonMutationVariables>;
export const UnFavoritePokemonDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnFavoritePokemon"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unFavoritePokemon"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPokemon"}}]}}]}},...FullPokemonFragmentDoc.definitions]} as unknown as DocumentNode<UnFavoritePokemonMutation, UnFavoritePokemonMutationVariables>;
export const GetPokemonsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPokemonsList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PokemonsQueryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetPokemonsListQuery, GetPokemonsListQueryVariables>;
export const GetAllPokemonNamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPokemonNames"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemonNames"}}]}}]} as unknown as DocumentNode<GetAllPokemonNamesQuery, GetAllPokemonNamesQueryVariables>;
export const GetAllPokemonTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPokemonTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemonTypes"}}]}}]} as unknown as DocumentNode<GetAllPokemonTypesQuery, GetAllPokemonTypesQueryVariables>;
export const GetPokemonDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPokemon"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemonByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPokemon"}}]}}]}},...FullPokemonFragmentDoc.definitions]} as unknown as DocumentNode<GetPokemonQuery, GetPokemonQueryVariables>;