import { ReactNode } from 'react';

import { styled } from '@mui/material';

import { spacing } from '../../styles/spacing';

const StyledMain = styled('main')`
  padding: ${spacing(4)};
`;

type MainProps = {
  children: ReactNode;
};

export const Main = ({ children }: MainProps) => <StyledMain>{children}</StyledMain>;
