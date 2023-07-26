import { ThemeOptions, alpha } from '@mui/material';
import { darkTheme } from '@cosmos-cruises/design.themes.dark-theme';
import { lightTheme } from '@cosmos-cruises/design.themes.light-theme';

const lightDefaults: ThemeOptions = {
  palette: { primary: { main: '#B32E29' } },
};
const darkDefaults: ThemeOptions = {
  palette: { primary: { main: alpha('#FF0000', 0.8) } },
};

/**
 * Returns a dark theme for the portfolio with the given options (optional)
 * @param options - Options to be applied to the theme
 * @returns Configured dark theme for the application.
 */
export const darkMarsTheme = (options: ThemeOptions = darkDefaults) =>
  darkTheme(options);

export const lightMarsTheme = (options: ThemeOptions = lightDefaults) =>
  lightTheme(options);
