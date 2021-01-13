import { actionType, transactionTypes } from "../Types/types";

export const TransReducer = (state: any, action: actionType) => {
   console.log("state===>", state);
   switch (action.type) {
      case "ADD_TRANSACTION":
         return [action.payload, ...state];

      default:
   }
};
