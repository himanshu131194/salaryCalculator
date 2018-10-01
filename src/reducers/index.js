import { combineReducers } from "redux";
import SalaryReducer from "./reducer_salary";

const rootReducer = combineReducers({
  salary: SalaryReducer
});

export default rootReducer;
