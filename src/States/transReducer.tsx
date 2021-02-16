import { actionType, StateType } from "../Types/type";

export const TransReducer = (state: StateType, action: actionType) => {
   switch (action.type) {
      case "ADD_TRANSACTION":
         return [action.payload, ...state];

      default:
   }
};
