import React from 'react';
import { render } from '@testing-library/react';
import { MUIPreviewContext } from '@showoff/dev.preview-contexts.mui-preview-context';
import { SampleBookingPage } from './booking-page.composition';

it('should render with the correct breadcrumb', () => {
  const { getByTestId } = render(
    <MUIPreviewContext>
      <SampleBookingPage />
    </MUIPreviewContext>
  );

  const rendered = getByTestId('DarkModeOutlinedIcon');
  expect(rendered).toBeTruthy();
});
