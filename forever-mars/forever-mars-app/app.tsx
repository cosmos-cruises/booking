import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  SettingsProvider,
  SettingsConsumer,
} from '@cosmos-cruises/forever-mars.contexts.settings-context';
import { Main } from '@cosmos-cruises/forever-mars.layouts.main';
import { Homepage } from '@cosmos-cruises/marketing.pages.homepage';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { BookingPage } from '@cosmos-cruises/booking.pages.booking-page';
import {
  SITE_FOOTER_META,
  SITE_HEADER_LINKS,
  ORG_SOCIAL_LINKS,
  ORG_PROFILE,
} from '@cosmos-cruises/marketing.constants.data';
import { darkMarsTheme, lightMarsTheme } from './themes';

export function ForeverMarsApp() {
  const dark = useMemo(() => darkMarsTheme(), []);
  const light = useMemo(() => lightMarsTheme(), []);

  return (
    <>
      <Helmet>
        <title>
          Forever Mars - Your Way Getting to Mars. And Staying There.
        </title>
      </Helmet>
      <SettingsProvider>
        <SettingsConsumer>
          {({ theme }) => (
            <ThemeProvider theme={theme === 'dark' ? dark : light}>
              <Main
                footerProps={SITE_FOOTER_META}
                headerProps={SITE_HEADER_LINKS}
              >
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Homepage
                        profile={ORG_PROFILE}
                        socialLinks={ORG_SOCIAL_LINKS.links}
                      />
                    }
                  />
                  <Route
                    path="/booking"
                    element={
                      <BookingPage
                        email={ORG_PROFILE.email}
                        socialLinks={ORG_SOCIAL_LINKS.links}
                      />
                    }
                  />
                </Routes>
              </Main>
            </ThemeProvider>
          )}
        </SettingsConsumer>
      </SettingsProvider>
    </>
  );
}
