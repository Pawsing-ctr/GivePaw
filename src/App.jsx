import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
