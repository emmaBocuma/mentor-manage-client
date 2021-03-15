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

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const result = await auth.signInWithEmailAndPassword(email, password);
  return result.user;
};

export const createUserWithEmailAndPassword = async (
  user: UserBasic & { password: string }
) => {
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
  return userCreated.data.createUser;
};

export const signOut = async () => {
  await auth.signOut();
};

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = async () => {
  const result = await auth.signInWithPopup(googleProvider);
  return result.user;
};
