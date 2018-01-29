//location for all the different action creators for my app

export const selectLibrary = libraryId => {
  return {
    type: "select_library",
    payload: "libraryId",
  };
};
