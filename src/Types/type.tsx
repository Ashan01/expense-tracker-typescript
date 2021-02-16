export type actionType = {
   type: "ADD_TRANSACTION";
   payload: {
      desc: String;
      amount: Number;
   };
};

export type StateType = [
   {
      desc: String;
      amount: Number;
   }
];
