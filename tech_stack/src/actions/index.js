//location for all the different action creators for my app

export const selectLibrary = id => {
  return {
    type: "select_library",
    payload: id,
  };
};
