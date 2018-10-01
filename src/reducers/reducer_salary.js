import { FETCH_SALARY, ADD_SALARY } from "../actions";

export default function(state={}, action){
     switch (action.type) {
       case FETCH_SALARY:
         return action.payload || false;
         break;
       case ADD_SALARY:
         return action.payload || false;
         break;
       default:
          return state
     }
}
