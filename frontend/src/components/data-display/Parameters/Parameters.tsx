import { Box, styled } from '@mui/material';

import { spacing } from '../../../styles/spacing';

import { formatValue } from './formatValue';

const StyledRow = styled('div')`
  display: flex;
  gap: 2;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[300]};
  padding: ${spacing(1)};
`;

const StyledColumn = styled('div')`
  flex: 1;
`;

export type ParametersValue = string | number | boolean | Array<string | number> | null;
export type ParametersRow = [name: string, value?: ParametersValue];

type ParametersProps = {
  rows: ParametersRow[];
};

export const Parameters = ({ rows }: ParametersProps) => {
  return (
    <Box>
      {rows.map(([name, value], i) => (
        <StyledRow key={i}>
          <StyledColumn>{name}</StyledColumn>
          <StyledColumn>{formatValue(value)}</StyledColumn>
        </StyledRow>
      ))}
    </Box>
  );
};
