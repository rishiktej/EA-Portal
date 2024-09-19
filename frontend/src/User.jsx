import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Exp from "./User/Exp";
import Login from "./User/Login";

function App() {
  console.log("user jsx");
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/override/*" element={<Exp />} />
      </Routes>
    </>
  );
}

export default App;
