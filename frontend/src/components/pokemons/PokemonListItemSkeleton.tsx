import { CardMedia, css, Skeleton, Stack, styled } from '@mui/material';

const StyledCardMedia = styled(CardMedia)<{ layout?: 'list' | 'grid' }>`
  position: relative;
  aspect-ratio: 1 / 1;

  ${({ layout }) =>
    layout === 'list' &&
    css`
      height: 200px;
      margin-right: 20px;
    `}
`;

type PokemonListItemSkeletonProps = {
  layout?: 'list' | 'grid';
};

export const PokemonListItemSkeleton = ({ layout }: PokemonListItemSkeletonProps) => {
  return (
    <Stack direction={layout === 'list' ? 'row' : 'column'} width="100%">
      <StyledCardMedia layout={layout}>
        <Skeleton width="100%" height="100%" />
      </StyledCardMedia>
      <Stack
        direction="column"
        gap={1.3}
        pt={layout === 'list' ? 2 : 3}
        width={layout === 'list' ? '300px' : 'auto'}
      >
        <Skeleton width="70%" height="20px" />
        <Skeleton width="50%" height="12px" />
      </Stack>
    </Stack>
  );
};
