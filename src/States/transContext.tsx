import React, { createContext, useReducer } from "react";

import { actionType, StateType, transTypo } from "../Types/type";
import { TransReducer } from "./transReducer";

const initialTransactions = [
   { desc: "Bills", amount: -500 },
   { desc: "Cash", amount: 100 },
   { desc: "Investments", amount: -3000 },
];

export let TransContext: any = createContext(initialTransactions);

export const TransProvider = ({ children }: { children: any }) => {
   const [state, dispatch]: any = useReducer(TransReducer, initialTransactions);

   function addTransaction(obj: StateType) {
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
