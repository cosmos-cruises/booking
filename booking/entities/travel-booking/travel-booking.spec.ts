import { travelBooking } from './travel-booking';

describe('travelBooking', () => {
  it('validates valid data', () => {
    const validData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@email.com',
    };
    expect(() => travelBooking.parse(validData)).not.toThrow();
  });
});
