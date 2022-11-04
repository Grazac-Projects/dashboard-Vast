import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Sidebar from "../src/components/Sidebar";
import Dashboard from "../src/pages/Dashboard/dashboard";
import Transaction from "./pages/Transaction/Transaction";
import Customers from "../src/pages/Customers/customer";
import Cards from "../src/pages/Cards/Cards";
// import Transaction from "../src/pages/Transaction/transaction";
// import Customers from "./pages/Customers/Customer";
// import Cards from "./pages/Cards/Cards";
import Analytics from "../src/pages/Analytics/analytics";
// import CustomerViewAllList from "./pages/CardViewALLList";
import TransactionViewALL from "./pages/TransactionViewALL";
import CardViewALLList from "./pages/CardViewALLList";
import CustomerViewAllPage from "./pages/CustomerViewAllPage";
import LogIn from "./pages/LogIn/Login";
// import Charges from "./pages/Charges/charges";
import useToken from "./components/useToken";
import Charges from "./pages/Charges/Charges";
import CustomerInfo from "./pages/CustomerInformation/CustomerInfo";
function App() {
  const { token, setToken } = useToken();
  console.log(token);
  if (!token) {
    return <LogIn setToken={setToken} />;
  }
  return (
    <div className='App'>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/transaction' element={<Transaction />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/cards' element={<Cards />} />
            <Route path='/analytics' element={<Analytics />} />

            <Route path='/cardViewAll' element={<CardViewALLList />} />
            <Route
              path='/transactionViewAll'
              element={<TransactionViewALL />}
            />
            <Route path='/customerViewAll' element={<CustomerViewAllPage />} />
            <Route
              path='/customerdetails/:email/:id'
              element={<CustomerInfo />}
            />
            <Route path='/Charges' element={<Charges />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
