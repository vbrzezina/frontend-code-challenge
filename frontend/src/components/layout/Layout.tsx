import Head from 'next/head';
import { ReactNode } from 'react';

import { styled } from '@mui/material';

import { spacing } from '../../styles/spacing';

import { Header, Main } from './';

const StyledLayout = styled('div')`
  padding-top: ${spacing(8)};
`;

type LayoutProps = {
  children: ReactNode;
  title: string;
};

export const Layout = ({ children, title }: LayoutProps) => (
  <StyledLayout>
    <Head>
      <title>{`${title} | Pokedex`}</title>
    </Head>
    <Header />
    <Main>{children}</Main>
  </StyledLayout>
);
