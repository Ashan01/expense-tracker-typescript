export type transactionTypes = {
   desc: string;
   amount: number;
};

export type actionType = {
   type: "ADD_TRANSACTION";
   payload: {
      desc: string;
      amount: number;
   };
};

export type transTypo = {
   Transaction: transactionTypes[];
   addTransaction: React.FC<actionType>;
};
