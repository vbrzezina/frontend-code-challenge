import { ChangeEvent, SyntheticEvent } from 'react';

import { GridView, TableRowsOutlined } from '@mui/icons-material';
import {
  Autocomplete,
  FormControlLabel,
  Paper,
  Stack,
  styled,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

import { spacing } from '../../styles/spacing';

const StyledPokemonFilters = styled(Paper)`
  padding: ${spacing(2)};
  margin-bottom: ${spacing(4)};
`;

const StyledTypesSelect = styled(Autocomplete<string>)`
  width: 200px;
`;

type PokemonFiltersProps = {
  types: string[];
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onTypeChange: (event: SyntheticEvent, value: string | null) => void;
  onFavoritesChange: (event: SyntheticEvent, checked: boolean) => void;
  onLayoutChange: () => void;
};

export const PokemonFilters = ({
  types,
  onSearchChange,
  onTypeChange,
  onFavoritesChange,
  onLayoutChange,
}: PokemonFiltersProps) => {
  return (
    <StyledPokemonFilters>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" flex={1} gap={2}>
          <TextField label="Search" size="small" onChange={onSearchChange} />
          <StyledTypesSelect
            options={types}
            renderInput={(params) => <TextField {...params} size="small" label="Type" />}
            onChange={onTypeChange}
          />
          <FormControlLabel control={<Switch />} label="Favorites" onChange={onFavoritesChange} />
        </Stack>
        <ToggleButtonGroup value="grid" exclusive onChange={onLayoutChange}>
          <ToggleButton value="grid">
            <GridView />
          </ToggleButton>
          <ToggleButton value="rows">
            <TableRowsOutlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </StyledPokemonFilters>
  );
};
