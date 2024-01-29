import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  SettingsProvider,
  SettingsConsumer,
} from '@cosmo-cruises/forever-mars.contexts.settings-context';
import { Main } from '@cosmo-cruises/forever-mars.layouts.main';
import { Homepage } from '@cosmo-cruises/marketing.pages.homepage';
import { ThemeProvider } from '@cosmo-cruises/design.themes.theme-provider';
import { BookATrip } from '@cosmo-cruises/booking.pages.book-a-trip';
import {
  SITE_FOOTER_META,
  SITE_HEADER_LINKS,
  ORG_PROFILE,
} from '@cosmo-cruises/marketing.constants.data';
import { darkMarsTheme, lightMarsTheme } from './themes';

export function ForeverMarsApp() {
  const dark = useMemo(() => darkMarsTheme(), []);
  const light = useMemo(() => lightMarsTheme(), []);

  return (
    <>
      <Helmet>
        <title>
          Forever Mars - Your Path to Reaching Mars. And Staying There.
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
                    element={<Homepage profile={ORG_PROFILE} />}
                  />
                  <Route
                    path="/booking"
                    element={<BookATrip email={ORG_PROFILE.email} />}
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
