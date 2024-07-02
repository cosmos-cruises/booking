import { useState } from 'react';
import {
  travelBooking,
  type TravelBookingType,
} from '@cosmo-cruises/booking.entities.travel-booking';
import { Field, Form } from '@cosmo-cruises/design.patterns.form';
import { SuccessMessage } from '@cosmo-cruises/design.ui.actions.success-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { Grid } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

/* helper function to create the field, for type inference */
function createField(
  field: Field<TravelBookingType>
): Field<TravelBookingType> {
  return field;
}

/* resolver to validate the form */
const resolver = zodResolver(travelBooking);

const ENDPOINT_URL =
  'https://7fntg2xcdgkwxs2kneqokruesi0fvujy.lambda-url.us-east-1.on.aws/';

/* form component, it handles and creates the form context and creates the layout */
export function BookAMarsTrip() {
  const [submitError, setSubmitError] = useState<Error | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TravelBookingType>({
    /* the resolver will validate the inputs with Zod */
    resolver,
  });

  const onSubmit: SubmitHandler<TravelBookingType> = async (data) => {
    setSubmitSuccess(false);
    setSubmitError(null);
    setLoading(true);

    try {
      await fetch(ENDPOINT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {submitError && (
        <div
          style={{
            width: '50%',
            margin: 'auto',
          }}
        >
          <p>
            There was an error submitting your article. Please try again later.
          </p>
        </div>
      )}
      {submitSuccess ? (
        <div
          style={{
            width: '50%',
            margin: 'auto',
          }}
        >
          <SuccessMessage title="Contact Details Submitted!">
            Thank you for submitting your contact information. We will be in
            touch!
          </SuccessMessage>
        </div>
      ) : (
        <Form
          register={register}
          handleSubmit={handleSubmit(onSubmit)}
          errors={errors}
          loading={loading}
          image="https://static.bit.dev/Community/images/launch-to-mars.png"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Form.Input
                field={createField({
                  label: 'First Name',
                  name: 'firstName',
                  fullWidth: true,
                })}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Form.Input
                field={createField({
                  label: 'Last Name',
                  name: 'lastName',
                  fullWidth: true,
                })}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{
              mt: 2,
            }}
          >
            <Form.Input
              field={createField({
                label: 'Email',
                name: 'email',
                fullWidth: true,
              })}
            />
          </Grid>
          <Form.Button text="Register for Mars Trip" />
        </Form>
      )}
    </div>
  );
}
