import React, { createContext, useReducer } from "react";
import { TransReducer } from "./transReducer";
import { actionType, StateType } from "../Types/type";

const initialTransactions = [
   { desc: "Bills", amount: -500 },
   { desc: "Cash", amount: 100 },
   { desc: "Investments", amount: -3000 },
];

export let TransContext = createContext(initialTransactions);

export const TransProvider = ({ children }: { children: any }) => {
   const [state, dispatch] = useReducer(TransReducer, initialTransactions):any

   function addTransaction(obj) {
      dispatch({
         type: "ADD_TRANSACTION",
         payload: {
            desc: obj.desc,
            amount: obj.amount,
         },
      });
   }

   return (
      <TransContext.Provider
         value={{
            Transaction: state,
            addTransaction,
         }}
      >
         {children}
      </TransContext.Provider>
   );
};
