import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Main } from '@showoff/personal-portfolio.layouts.main';
import { Logo } from '@showoff/design.brand.logo';
import { BookingPage } from './booking-page';

export const SampleBookingPage = () => (
  <MemoryRouter>
    <Main
      headerProps={{
        logo: <Logo />,
        navLinks: [
          { label: 'Projects', url: '/projects' },
          { label: 'Contact', url: '/contact' },
          { label: 'About me', url: '/about' },
        ],
      }}
      footerProps={{
        leftContent: 'Thanks for visiting.',
        rightContent: `© ${new Date().getFullYear()} Ober. All Rights Reserved.`,
      }}
    >
      <BookingPage
        email="hello@tobias.com"
        socialLinks={[{ name: 'github', url: 'https://github.com' }]}
      />
    </Main>
  </MemoryRouter>
);
