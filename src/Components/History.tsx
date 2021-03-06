import React, { useContext } from "react";
import "../App.css";
import { TransContext } from "../States/transContext";
import { StateType } from "../Types/type";

export const History = () => {
   let { Transaction } = useContext(TransContext);
   return (
      <div>
         <div className="padding">
            <h2>History</h2>
         </div>

         <div>
            <ul className="transaction-list">
               {Transaction.map((val: StateType, ind: any) => {
                  return (
                     <li key={ind}>
                        <span>{val.desc}</span>
                        <span>{val.amount}</span>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
};
