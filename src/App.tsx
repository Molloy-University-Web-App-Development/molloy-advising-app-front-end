import "./styles.css";
import MajorSearchButton from "./pages/MajorSearchButton";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MajorSearchButton />} />
      </Routes>
    </BrowserRouter>
  );
}
