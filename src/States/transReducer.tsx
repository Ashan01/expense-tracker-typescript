import { actionType, StateType } from "../Types/type";

export const TransReducer: any = (state: StateType[], action: actionType) => {
   console.log("state===>", state);
   switch (action.type) {
      case "ADD_TRANSACTION":
         return [action.payload, ...state];

      default:
   }
};
