import { useState } from 'react';

import { GetPokemonsListDocument, PokemonsQueryInput, useGetPokemonsListQuery } from '../api';

type PokemonsQueryInputWithLimit = PokemonsQueryInput & { limit: number };

export default function usePokemons(query: PokemonsQueryInputWithLimit) {
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const { data, previousData, loading, fetchMore } = useGetPokemonsListQuery({
    variables: { query },
    fetchPolicy: 'network-only',
  });

  const loadMore = async () => {
    setIsFetchingMore(true);

    const offset = data?.pokemons?.offset || 0 + query.limit;

    await fetchMore({
      query: GetPokemonsListDocument,
      variables: {
        query: { limit: query.limit, offset },
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.pokemons.edges;

        return newEdges.length
          ? {
              ...previousResult,
              pokemons: {
                ...previousResult.pokemons,
                offset,
                edges: [...previousResult.pokemons.edges, ...newEdges],
              },
            }
          : previousResult;
      },
    });

    setIsFetchingMore(false);
  };

  return { data: data || previousData, previousData, loading, isFetchingMore, loadMore };
}
