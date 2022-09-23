import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "../src/pages/Dashboard/dashboard";
// import Background from "./components/Background/background";
import Transaction from "../src/pages/Transaction/transaction";
import Customers from "../src/pages/Customers/customer";
import Cards from "../src/pages/Cards/Cards";
import Analytics from "../src/pages/Analytics/analytics";
// import CustomerViewAllList from "./pages/CardViewALLList";
import TransactionViewALL from "./pages/TransactionViewALL";
import CardViewALLList from "./pages/CardViewALLList";
import CustomerViewAllPage from "./pages/CustomerViewAllPage";

function App() {
  return (
    <div className="App">
      {/* <h1>hello</h1> */}
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
      </BrowserRouter>
    </div>
  );
}

export default App;
