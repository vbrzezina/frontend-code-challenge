import debounce from 'lodash.debounce';
import { GetStaticProps } from 'next';
import { SyntheticEvent, useState } from 'react';

import {
  addApolloState,
  GetAllPokemonTypesDocument,
  GetPokemonsListDocument,
  initializeApollo,
  useGetAllPokemonTypesQuery,
} from '../api';

import { Layout } from '../components/layout';
import { PokemonFilters, PokemonList } from '../components/pokemons';
import usePokemons from '../hooks/usePokemons';

const PAGE_SIZE = 20;

const Home = () => {
  const [search, setSearch] = useState<string>();
  const [type, setType] = useState<string | null>();
  const [isFavorite, setIsFavorite] = useState<boolean>();
  const [layout, setLayout] = useState<'list' | 'grid'>('grid');

  const query = {
    limit: PAGE_SIZE,
    search,
    filter: {
      isFavorite,
      type,
    },
  };

  const { data, loadMore, loading, isFetchingMore } = usePokemons(query);
  const { data: types } = useGetAllPokemonTypesQuery();

  const onSearchChange = debounce((e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value)
  );

  const onFavoritesChange = (_: SyntheticEvent, checked: boolean) => {
    setIsFavorite(checked);
  };

  const onTypeChange = (_: SyntheticEvent, value: string | null) => {
    setType(value);
  };

  const onLayoutChange = () => {
    if (layout === 'grid') {
      setLayout('list');
    } else {
      setLayout('grid');
    }
  };

  return (
    <Layout title="Pokemons">
      <PokemonFilters
        types={types?.pokemonTypes || []}
        onSearchChange={onSearchChange}
        onFavoritesChange={onFavoritesChange}
        onTypeChange={onTypeChange}
        onLayoutChange={onLayoutChange}
      />
      <PokemonList
        pokemons={data?.pokemons?.edges}
        loading={loading}
        hasMore={data && data.pokemons.count > data.pokemons.offset + data.pokemons.limit}
        isFetchingMore={isFetchingMore}
        placeholderCount={PAGE_SIZE}
        layout={layout}
        loadMore={loadMore}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GetPokemonsListDocument,
    variables: {
      query: {
        limit: PAGE_SIZE,
      },
    },
  });

  await apolloClient.query({
    query: GetAllPokemonTypesDocument,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 10,
  });
};

export default Home;
