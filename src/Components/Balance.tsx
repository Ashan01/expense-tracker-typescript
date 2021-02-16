import React, { useContext } from "react";
import { TransContext } from "../States/transContext";

export const Balance = () => {
   let { Transaction } = useContext(TransContext);

   function getIncome() {
      let Income = 0;
      var i;
      for (i = 0; i < Transaction.length; i++) {
         if (Transaction[i].amount > 0) Income += Transaction[i].amount;
      }
      return Income;
   }

   const getExpense = () => {
      let Expense = 0;
      var i;
      for (i = 0; i < Transaction.length; i++) {
         if (Transaction[i].amount < 0) Expense += Transaction[i].amount;
      }
      return Expense;
   };

   return (
      <div>
         <div className="padding">
            <h3>
               Balance <br />
               {getIncome() + getExpense()}
            </h3>
         </div>

         <div className="expense-container">
            <h3>
               Income <br /> {getIncome()}
            </h3>
            <h3>
               Expense <br /> {getExpense()}
            </h3>
         </div>
      </div>
   );
};
