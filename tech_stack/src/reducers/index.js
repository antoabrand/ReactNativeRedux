import { combineReducers } from "redux";
import LibraryReducer from "./LibraryReducer";
import SelectionReducer from "./SelectionReducer";

//wires up all our reducers to one place using combineReducers helper func from redux library
export default combineReducers({
  //these keys have the value of the state returned by the reducer and determines the way the state object looks
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer,
});
