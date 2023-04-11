import InfiniteScroll from 'react-infinite-scroll-component';

import { Grid, styled, css } from '@mui/material';

import { Pokemon } from '../../api';

import { PokemonListItem } from './PokemonListItem';
import { PokemonListItemSkeleton } from './PokemonListItemSkeleton';

const StyledInfiniteScroll = styled(InfiniteScroll)`
  overflow: unset;
`;

const StyledGridContainer = styled(Grid)<{ loading?: boolean }>`
  transition: opacity 0.2s linear;
  transition-delay: 0.2;

  ${({loading}) => loading && css`
    opacity: 0.5;
    pointer-events: none;
  `}
`;

export type PokemonSummary = Pick<Pokemon, 'id' | 'name' | 'image' | 'types' | 'isFavorite'>;

type PokemonListProps = {
  loading?: boolean;
  hasMore?: boolean;
  isFetchingMore?: boolean;
  placeholderCount?: number;
  pokemons?: PokemonSummary[];
  layout: 'list' | 'grid';
  loadMore: () => void;
};

export const PokemonList = ({
  loading,
  hasMore,
  isFetchingMore,
  placeholderCount = 10,
  pokemons,
  layout,
  loadMore,
}: PokemonListProps) => {
  if (!pokemons?.length) {
    return <>No pokemons found</>;
  }

  return (
    <>
      <StyledInfiniteScroll
        dataLength={pokemons.length}
        next={loadMore}
        hasMore={!!hasMore}
        scrollThreshold={1}
        style={{ overflow: 'unset' }}
        loader={null} // Impossible to render the skeletons correctly through the prop
      >
        <StyledGridContainer container spacing={4} loading={loading}>
          {pokemons.map((pokemon) => {
            return (
              <Grid
                key={pokemon.id}
                item
                xs={12}
                sm={layout === 'grid' ? 6 : 12}
                md={layout === 'grid' ? 3 : 12}
                xl={layout === 'grid' ? 2 : 12}
              >
                <PokemonListItem pokemon={pokemon} layout={layout} />
              </Grid>
            );
          })}
          {isFetchingMore && (
            <>
              {[...Array(placeholderCount)].map((i) => (
                <Grid
                  item
                  key={i}
                  xs={12}
                  sm={layout === 'grid' ? 6 : 12}
                  md={layout === 'grid' ? 3 : 12}
                  xl={layout === 'grid' ? 2 : 12}
                >
                  <PokemonListItemSkeleton layout={layout} />
                </Grid>
              ))}
            </>
          )}
        </StyledGridContainer>
      </StyledInfiniteScroll>
    </>
  );
};
