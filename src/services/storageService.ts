import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth } from '../config/firebase';

export const uploadVideo = async (file: File): Promise<string> => {
  if (!auth.currentUser) throw new Error('User not authenticated');

  const storage = getStorage();
  const videoRef = ref(storage, `videos/${auth.currentUser.uid}/${Date.now()}_${file.name}`);

  await uploadBytes(videoRef, file);
  return getDownloadURL(videoRef);
};