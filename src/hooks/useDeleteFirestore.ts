export function useDeleteDocument(collectionName) {

  async function deleteDocument(documentId) {
    try {
      await collectionName.doc(documentId).delete();
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, error };
    }
  }

  return deleteDocument;
}
