import axios from "axios";

export const FETCH_SALARY = "fetch_salary";
export const ADD_SALARY = "add_salary";

const ROOT_URL = "localhost:4000/salary/";

export function fetchSalary(){
   const request = axios.get("localhost:4000/salary/");
   return {
      type: FETCH_SALARY,
      payload : request.data
   }
}
