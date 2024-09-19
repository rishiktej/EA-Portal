import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Exp from "./User/Exp";
import Login from "./User/Login";

function App() {
  console.log("user jsx");
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/override/*" element={<Exp />} />
=======
        <Route path='/login' element={<Login />}/>
        <Route path='/override/*' element={<Exp />}/>        
>>>>>>> 7f42997fd4fc94e351931b88c358182cccb1eec5
      </Routes>
    </>
  );
}

export default App;
