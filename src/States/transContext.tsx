import React, { createContext, useReducer } from "react";

import { actionType, transactionTypes, transTypo } from "../Types/types";
import { TransReducer } from "./transReducer";

const initialTransactions = [
   { desc: "Bills", amount: -500 },
   { desc: "Cash", amount: 100 },
   { desc: "Investments", amount: -3000 },
];

export let TransContext: any = createContext(initialTransactions);

export const TransProvider = ({ children }: { children: any }) => {
   const [state, dispatch] = useReducer(TransReducer, initialTransactions);

   console.log("state=>", state);

   function addTransaction(obj: transactionTypes) {
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
