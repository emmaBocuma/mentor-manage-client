import * as React from 'react';
import SignInForm from '../SignInForm';
import { render, screen } from '../../tests/helpers/utils';
import userEvent from '@testing-library/user-event';

describe('Sign In Form', () => {
  const signInFn = jest.fn();

  it('shows error for email and password field if invalid or missing', () => {
    render(<SignInForm signInHandler={signInFn} />);
    const submitBtn = screen.getByRole('button', { name: /Sign In/i });

    userEvent.click(submitBtn);

    expect(screen.getByTestId('input-error-email')).toHaveTextContent(
      'Please enter an email address'
    );
    expect(screen.getByTestId('input-error-password')).toHaveTextContent(
      'Please enter a password'
    );
  });

  it('hides errors while user is typing', () => {
    render(<SignInForm signInHandler={signInFn} />);
    const submitBtn = screen.getByRole('button', { name: /Sign In/i });

    userEvent.click(submitBtn);
    expect(screen.getByTestId('input-error-email')).toHaveTextContent(
      'Please enter an email address'
    );

    userEvent.type(screen.getByLabelText('Email'), 'name...');
    expect(screen.queryByTestId('input-error-email')).not.toBeInTheDocument();
  });

  it('submits form if all fields valid', () => {
    const signInFn = jest.fn();
    render(<SignInForm signInHandler={signInFn} />);

    const submitBtn = screen.getByRole('button', { name: /Sign In/i });

    userEvent.type(screen.getByLabelText('Email'), 'name@domain.com');
    userEvent.type(screen.getByLabelText('Password'), 'dummypass');
    userEvent.click(submitBtn);

    expect(signInFn).toHaveBeenCalledTimes(1);
  });
});
