import { GetStaticPaths, GetStaticProps } from 'next';

import {
  addApolloState,
  GetAllPokemonNamesDocument,
  GetPokemonDocument,
  initializeApollo,
  useGetPokemonQuery,
} from '../api';

import { Layout } from '../components/layout';
import { PokemonDetailCard } from '../components/pokemons';

type DetailProps = {
  name: string;
};

const Home = ({ name }: DetailProps) => {
  const { data } = useGetPokemonQuery({ variables: { name } });
  const pokemon = data?.pokemonByName;

  if (!pokemon) {
    return null;
  }

  return (
    <Layout title={pokemon.name}>
      <PokemonDetailCard pokemon={pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const {
    data: { pokemonNames },
  } = await apolloClient.query({
    query: GetAllPokemonNamesDocument,
  });

  return {
    paths: pokemonNames.map((name) => ({ params: { name: name.toLowerCase() } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();
  const name = params?.name as string;

  await apolloClient.query({
    query: GetPokemonDocument,
    variables: {
      name,
    },
  });

  return addApolloState(apolloClient, {
    props: { name },
    revalidate: 10,
  });
};

export default Home;
