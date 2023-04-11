import { AppBar, Link, styled, Toolbar, Typography } from '@mui/material';

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const StyledBrandLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const Header = () => (
  <AppBar position="fixed">
    <StyledToolbar>
      <StyledBrandLink href="/">
        <Typography variant="h6">Pokedex</Typography>
      </StyledBrandLink>
    </StyledToolbar>
  </AppBar>
);
