import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';

export interface UserData {
  uid: string;
  email: string;
  displayName: string;
  createdAt: number;
}

export const createUser = async (email: string, password: string, displayName: string): Promise<UserData> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;

    // Update user profile with display name
    await updateProfile(user, { displayName });

    // Create user data object
    const userData: UserData = {
      uid: user.uid,
      email: user.email!,
      displayName,
      createdAt: Date.now(),
    };

    // Store additional user data in Realtime Database
    const db = getDatabase();
    await set(ref(db, `users/${user.uid}`), userData);

    return userData;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const loginUser = async (email: string, password: string): Promise<UserData> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;

    // Fetch user data from Realtime Database
    const db = getDatabase();
    const userSnapshot = await get(ref(db, `users/${user.uid}`));
    
    if (!userSnapshot.exists()) {
      throw new Error('User data not found');
    }

    return userSnapshot.val() as UserData;
  } catch (error: any) {
    throw new Error(error.message);
  }
};