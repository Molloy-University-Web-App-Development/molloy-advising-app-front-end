import "./styles.css";
import MajorSearch from "./pages/MajorSearch";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MajorSearch />} />
      </Routes>
    </BrowserRouter>
  );
}
