import Image from 'next/image';
import { MouseEventHandler } from 'react';

import { Favorite, FavoriteBorder } from '@mui/icons-material';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  css,
  Stack,
  styled,
  Typography,
} from '@mui/material';

import { useFavoritePokemonMutation, useUnFavoritePokemonMutation } from '../../api';

import { PokemonSummary } from './PokemonList';

const StyledCardMedia = styled(CardMedia)<{ layout?: 'list' | 'grid' }>`
  position: relative;
  aspect-ratio: 1 / 1;

  ${({ layout }) =>
    layout === 'list' &&
    css`
      height: 200px;
    `}
`;

const StyledCardContent = styled(CardContent)`
  position: relative;
`;

const StyledFavoriteIcon = styled('div')<{ isFavorite?: boolean; layout?: 'list' | 'grid' }>`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-12px);

  ${({ layout }) =>
    layout === 'list' &&
    css`
      top: 45px;
      right: -30px;
    `}

  ${({ isFavorite, theme }) =>
    isFavorite
      ? css`
          svg {
            fill: ${theme.palette.error.main};
          }
        `
      : css`
          svg {
            &:hover {
              fill: ${theme.palette.error.main};
            }
          }
        `}
`;

type PokemonListItemProps = {
  pokemon: PokemonSummary;
  isEvolution?: boolean;
  layout?: 'list' | 'grid';
};

export const PokemonListItem = ({
  pokemon,
  isEvolution,
  layout = 'grid',
}: PokemonListItemProps) => {
  const [favoritePokemon] = useFavoritePokemonMutation();
  const [unFavoritePokemon] = useUnFavoritePokemonMutation();

  const toggleFavorite = (pokemon: PokemonSummary) => {
    if (pokemon.isFavorite) {
      unFavoritePokemon({
        variables: { id: pokemon.id },
      });
    } else {
      favoritePokemon({
        variables: { id: pokemon.id },
      });
    }
  };

  const onFavoriteClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    toggleFavorite(pokemon);
  };

  return (
    <Card>
      <CardActionArea href={`/${pokemon.name.toLowerCase()}`}>
        <Stack direction={layout === 'grid' ? 'column' : 'row'}>
          <StyledCardMedia layout={layout}>
            <Image alt={pokemon.name} src={pokemon.image} layout="fill" />
          </StyledCardMedia>
          <StyledCardContent>
            <Typography variant="h5">{pokemon.name}</Typography>
            {!isEvolution && <Typography variant="body2">{pokemon.types?.join(', ')}</Typography>}
            <StyledFavoriteIcon
              isFavorite={pokemon.isFavorite}
              layout={layout}
              onClick={onFavoriteClick}
            >
              {pokemon.isFavorite ? <Favorite /> : <FavoriteBorder />}
            </StyledFavoriteIcon>
          </StyledCardContent>
        </Stack>
      </CardActionArea>
    </Card>
  );
};
