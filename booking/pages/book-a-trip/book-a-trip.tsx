import { MarginType, Margin } from '@showoff/design.layouts.margin';
import { Breadcrumb } from '@cosmo-cruises/design.ui.navigation.breadcrumb';
import { Typography } from '@cosmo-cruises/design.typography.typography';
import { BookAMarsTrip } from '@cosmo-cruises/booking.forms.book-a-mars-trip';
import { Artwork } from '@showoff/contact-me.ui.artwork';
import { Box, Grid, GridProps } from '@mui/material';

export type BookATripProps = {
  email: string;
} & GridProps;

export function BookATrip({ email, ...rest }: BookATripProps) {
  return (
    <Grid container spacing={5} {...rest}>
      <Grid item xs={12} md={6} sm={12}>
        <Breadcrumb crumbs={[{ crumb: 'Book a trip.' }]} />
        <Margin mt={MarginType.MEDIUM}>
          <Typography variant="body2" fontSize={18}>
            Thinking of moving to Mars forever? Book a flight or e-mail us
            directly at <b>{email}</b>
          </Typography>
        </Margin>
        <Margin mt={MarginType.MEDIUM}>
          <BookAMarsTrip />
        </Margin>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          display: {
            xs: 'none',
            sm: 'none',
            md: 'flex',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '75%',
            width: '75%',
            ml: 15,
            mt: 2,
          }}
        >
          <Artwork />
        </Box>
      </Grid>
    </Grid>
  );
}
