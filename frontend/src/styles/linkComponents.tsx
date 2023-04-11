import { UrlObject } from 'url';

import NextLink from 'next/link';
import { forwardRef } from 'react';

import { LinkProps as MuILinkProps } from '@mui/material';

export const LinkComponent = forwardRef<HTMLAnchorElement, MuILinkProps>(
  ({ color, href, ...props }, ref) => {
    return (
      <NextLink ref={ref} href={href as string | UrlObject} color={color as string} {...props} />
    );
  }
);

LinkComponent.displayName = 'LinkComponent';
