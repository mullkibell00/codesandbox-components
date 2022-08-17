import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
