import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Join from "./Join";


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Header />} />
          <Route path="/checkout" element={<Join />} />
        </Routes>
      </div>
    </BrowserRouter>
 );
}
