export const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGNIN":
      return !state;
    default:
      return state;
  }
};
