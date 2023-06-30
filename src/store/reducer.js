import { initialState } from "./initialState";

// The reducer
// create the logic that is going to manipulate the state
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT": {
      const copy = { ...state }; // copy the state
      copy.count += 1; // added one to count
      return copy; // must always return the copy
    }

    case "DECREMENT": {
      const copy = { ...state }; // copy the state
      copy.count -= 1; // added one to count
      return copy;
    }

    case "RESET": {
      const copy = { ...state };
      copy.count = 0;
      return copy;
    }

    default:
      return initialState; // must always return initialState
  }
}
