export const getUsersCollectionLength = async (firestore) => {
  const collection = await firestore.collection('users').get();
  return collection.docs.length;
};
