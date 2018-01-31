//location for all the different action creators for my app

//action creators job is to create and return an action
export const selectLibrary = id => {
  //this is the action
  return {
    type: "select_library",
    payload: id,
  };
};
