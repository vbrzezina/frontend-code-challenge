import Image from 'next/image';
import { useMemo } from 'react';

import {
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Stack,
  styled,
  Typography,
} from '@mui/material';

import { Pokemon } from '../../api';

import { spacing } from '../../styles/spacing';

import { Parameters, ParametersRow } from '../data-display/Parameters';
import { PokemonListItem } from './PokemonListItem';

const StyledCardContent = styled(CardContent)`
  padding: ${spacing(4)};
`;

const StyledPokemonImage = styled(Box)`
  height: 300px;
  position: relative;
  aspect-ratio: 1 / 1;

  ${({ theme }) => theme.breakpoints.up('md')} {
    height: 400px;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    height: 500px;
  }
`;

const StyledLinearProgress = styled(LinearProgress)`
  height: 10px;
  flex: 1;
`;

type PokemonDetail = Omit<Pokemon, 'evolutions'> & {
  evolutions: Array<Pick<Pokemon['evolutions'][0], 'id' | 'name' | 'image' | 'isFavorite'>>;
};

type PokemonListItemProps = {
  pokemon: PokemonDetail;
};

export const PokemonDetailCard = ({ pokemon }: PokemonListItemProps) => {
  const pokemonParameters = useMemo<ParametersRow[]>(
    () => [
      ['Classification', pokemon.classification],
      ['Weaknesses', pokemon.weaknesses],
      ['Fast attacks', pokemon.attacks?.fast.map(({ name }) => name)],
      ['Special attacks', pokemon.attacks?.special.map(({ name }) => name)],
      ['Height', `${pokemon.height?.minimum} to ${pokemon.height?.maximum}`],
      ['Weight', `${pokemon.weight?.minimum} to ${pokemon.weight?.maximum}`],
    ],
    [pokemon]
  );

  return (
    <Stack gap={4}>
      <Card>
        <StyledCardContent>
          <Stack direction={['column', 'column', 'row', 'row']} gap={4}>
            <StyledPokemonImage>
              <Image alt={pokemon.name} src={pokemon.image} layout="fill" objectFit="contain" />
            </StyledPokemonImage>
            <Stack flex={1} gap={1}>
              <Typography variant="h3" component="h1">
                {pokemon.name} {pokemon.isFavorite}
              </Typography>
              <Typography variant="subtitle1">{pokemon.types?.join(', ')}</Typography>
              <Stack gap={1}>
                <Stack flexDirection="row" alignItems="center">
                  <StyledLinearProgress variant="determinate" value={100} />
                  <Box pl={1}>CP: {pokemon.maxCP}</Box>
                </Stack>
                <Stack flexDirection="row" alignItems="center">
                  <StyledLinearProgress variant="determinate" color="success" value={100} />
                  <Box pl={1}>HP: {pokemon.maxHP}</Box>
                </Stack>
              </Stack>
              <Parameters rows={pokemonParameters} />
            </Stack>
          </Stack>
        </StyledCardContent>
      </Card>
      {!!pokemon.evolutions.length && (
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            Evolutions
          </Typography>
          <Grid container spacing={4}>
            {pokemon.evolutions.map((pokemon) => (
              <Grid item xs={4} md={3} lg={2} key={pokemon.id}>
                <PokemonListItem isEvolution pokemon={pokemon} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Stack>
  );
};
