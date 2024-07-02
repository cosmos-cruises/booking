import { Handler } from 'aws-lambda';
import {
  travelBooking,
  TravelBookingType,
} from '@cosmo-cruises/booking.entities.travel-booking';

const { MARS_TRAVEL_AIRTABLE } = process.env;

/**
 * Parse the body of the request, if it's a string, parse it as JSON
 */
function maybeParse(
  body: string | Partial<TravelBookingType>
): Partial<TravelBookingType> {
  if (typeof body === 'string') {
    return JSON.parse(body) as Partial<TravelBookingType>;
  }
  return body;
}

export const handler: Handler = async (event) => {
  try {
    const isV2 = event.requestContext?.http;
    const method = isV2
      ? event.requestContext.http.method
      : event.requestContext.httpMethod;

    if (method === 'OPTIONS') {
      return {
        statusCode: 204,
        body: '',
      };
    }

    if (!MARS_TRAVEL_AIRTABLE) {
      return {
        statusCode: 500,
        body: {
          error: 'MARS_TRAVEL_AIRTABLE is not defined',
        },
      };
    }

    if (method === 'GET') {
      return {
        statusCode: 200,
        body: {
          message: 'Bit submission form',
        },
      };
    }

    if (method !== 'POST') {
      return {
        body: {
          error: `Only GET and POST methods are supported, you tried: ${method}`,
        },
        statusCode: 405,
      };
    }

    const body = maybeParse(event.body);

    // get the fields from the request body
    if (!body) {
      return {
        statusCode: 400,
        body: {
          error: 'Missing request body',
        },
      };
    }

    // Validate the request body
    try {
      travelBooking.parse(body);
    } catch (err) {
      return {
        statusCode: 400,
        body: {
          error: err.message,
        },
      };
    }

    const {
      firstName,
      lastName,
      email,
      // mediumHandle, mediumPostUrl
    } = body;

    // Form handler implementation, we use `await import` to get the type definitions
    const { default: Airtable } = await import('airtable');

    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: MARS_TRAVEL_AIRTABLE,
    });

    const base = Airtable.base('appfCCmFSF3BxR0pJ');

    const table = base.table('Table 1');

    try {
      await table.create([
        {
          fields: {
            'First Name': firstName,
            'Last Name': lastName,
            Email: email,
          },
        },
      ]);

      return {
        statusCode: 200,
        body: {
          message: 'Successfully submitted the form',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: {
          error: err.errorMessage,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: {
        error: err.errorMessage,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
};
