export default (state = null, action) => {
  switch (action.type) {
    case "select_library":
      return action.payload;
    default:
      return state;
  }
};

//reducers must always return something - if not type is met in the switch case then return the previously returned state
