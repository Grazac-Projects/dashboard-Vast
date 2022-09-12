import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "../src/pages/Dashboard/dashboard";
// import Background from "./components/Background/background";
import Transaction from "../src/pages/Transaction/transaction";
import Customers from "../src/pages/Customers/customer";
import Cards from "../src/pages/Cards/cards";
import Analytics from "../src/pages/Analytics/analytics";
// import { TooltipComponent } from '@syncfusion/ej2-react-popups'
function App() {
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
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
