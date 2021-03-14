import firebase from './firebase';

export const auth = firebase.auth();

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const result = await auth.signInWithEmailAndPassword(email, password);
  return result.user;
};

export const createUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  console.log('Creating user');
  const result = await auth.createUserWithEmailAndPassword(email, password);
  console.log(result);
  return result.user;
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
