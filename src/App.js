// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import CashFlowCalculator from "./Components/CashflowCalculator";
import FirstComponent from "./Components/FirstComponent";
import SecondComponent from "./Components/SecondComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BillingList from "./Components/BillingList";
import { STOCKS } from "./constant";
import { Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  const [whatToShow, setWhatToShow] = useState("billing");

  const [stocks, setStocks] = useState(STOCKS);

  const BUTTONS = [
    { key: "cashflow", title: "Cashflow", component: <CashFlowCalculator /> },
    {
      key: "subjects",
      title: "Subjects",
      component: (
        <FirstComponent
          name="test"
          coursename="mern"
          age={22}
          subs={["mongoDB", "React", "nodejs"]}
        />
      ),
    },
    {
      key: "stocks",
      title: "stocks",
      component: <SecondComponent stocks={stocks} setStocks={setStocks} />,
    },
    {
      key: "billing",
      title: "BillingList",
      component: <BillingList stocks={stocks} />,
    },
  ];
  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div style={{ position: "fixed", marginBottom: "5%", top: 0 }}>
          <p>welcome to react.</p>
          <span>
            {BUTTONS.map((v) => (
              <button
                key={v.key}
                onClick={(e) => setWhatToShow(v.key)}
                className={v.key === whatToShow ? "selected" : ""}
              >
                {v.title}
              </button>
            ))}
          </span>
        </div>
        {/* {BUTTONS.map((a) => a.key === whatToShow && a.component)} */}
        <a href="/stocks">stocks</a>
        <a href="/billing">BillingList</a>
        <a href="/subject">Subjects</a>
        <a href="/">Cashflow</a>

        <Link to="/stocks">stocks</Link>
        <Link to="/billing">BillingList</Link>
        <Link to="/subject">Subjects</Link>
        <Link to="/">Cashflow</Link>

        <NavLink to="/stocks">stocks</NavLink>
        <NavLink to="/billing">BillingList</NavLink>
        <NavLink to="/subject">Subjects</NavLink>
        <NavLink to="/">Cashflow</NavLink>

        <Routes>
          <Route path="/" element={<CashFlowCalculator />} />
          <Route
            path="/stocks"
            element={<SecondComponent stocks={stocks} setStocks={setStocks} />}
          />
          <Route
            path="*"
            element={
              <div>
                <h1>Page Not Found</h1>
              </div>
            }
          />
          <Route path="/billing" element={<BillingList stocks={stocks} />} />
          <Route
            path="/subject"
            element={
              <FirstComponent
                name="test"
                coursename="mern"
                age={22}
                subs={["mongoDB", "React", "nodejs"]}
              />
            }
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
