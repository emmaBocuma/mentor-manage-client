import firebase from './firebase';
import { gql } from '@apollo/client';
import { apolloClient } from '../';
import { UserBasic } from '../interfaces/common';

export const auth = firebase.auth();

const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput!) {
    createUser(user: $user) {
      firstName
      lastName
      email
    }
  }
`;

export interface IAuthError {
  message: string;
}
export interface IAuth {
  error?: IAuthError;
  user?: firebase.User | null;
}

const AuthError = (error: firebase.auth.AuthError) => {
  let message =
    'An error occurred while signing in. Please try again later or contact support.';
  switch (error.code) {
    case 'auth/invalid-email':
      message = 'Please enter a valid email address.';
      break;
    case 'auth/user-disabled':
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      message = 'Email and password combination not found.';
      break;
    case 'auth/email-already-in-use':
      message = 'Email is already in use.';
      break;
  }
  return { error: { message } };
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<IAuth> => {
  try {
    const result = await auth.signInWithEmailAndPassword(email, password);
    return { user: result.user };
  } catch (error) {
    return AuthError(error);
  }
};

export const createUserWithEmailAndPassword = async (
  user: UserBasic & { password: string }
) => {
  try {
    const result = await auth.createUserWithEmailAndPassword(
      user.email,
      user.password
    );
    const { email, firstName, lastName } = user;
    const authId = result.user?.uid;
    const userCreated = await apolloClient.mutate({
      mutation: CREATE_USER,
      variables: { user: { email, firstName, lastName, authId } },
    });
    return { user: userCreated.data.createUser };
  } catch (error) {
    return AuthError(error);
  }
};

export const signOut = async (): Promise<IAuth> => {
  try {
    await auth.signOut();
    return { user: null };
  } catch (error) {
    return AuthError(error);
  }
};

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = async (): Promise<IAuth> => {
  try {
    const result = await auth.signInWithPopup(googleProvider);
    return { user: result.user };
  } catch (error) {
    return AuthError(error);
  }
};
