import React from "react";
import "./App.css";
import { initNotification } from "./Services/serviceWorker";
import { Balance } from "./Components/Balance";
import { Header } from "./Components/Header";
import { History } from "./Components/History";
import { AddTransaction } from "./Components/AddTransaction";
import { TransProvider } from "./States/transContext";

function App() {
   return (
      <div className="App">
         <TransProvider>
            <Header />
            <Balance />
            <History />
            <AddTransaction />
            <button onClick={initNotification}>Configure</button>
         </TransProvider>
      </div>
   );
}

export default App;
