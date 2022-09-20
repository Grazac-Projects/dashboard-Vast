import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Sidebar from "../src/components/Sidebar";
import Dashboard from "../src/pages/Dashboard/dashboard";
import Transaction from "../src/pages/Transaction/transaction";
import Customers from "../src/pages/Customers/customer";
import Cards from "../src/pages/Cards/cards";
import Analytics from "../src/pages/Analytics/analytics";
// import CustomerViewAllList from "./pages/CardViewALLList";
import TransactionViewALL from "./pages/TransactionViewALL";
import CardViewALLList from "./pages/CardViewALLList";
import CustomerViewAllPage from "./pages/CustomerViewAllPage";

import LogIn from "../src/pages/LogIn/login";
function App() {
  const [userToken, setUserToken] = useState(true);
  if (userToken === true) {
    return <LogIn setUserToken={setUserToken} />;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/cardViewAll" element={<CardViewALLList />} />
            <Route path="/transactionViewAll" element={<TransactionViewALL />} />
            <Route path="/customerViewAll" element={<CustomerViewAllPage />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
