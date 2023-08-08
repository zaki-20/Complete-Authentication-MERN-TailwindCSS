import Header from "./components/Header";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";



function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="register" element={<Register />} />

      </Routes>


    </div>
  );
}

export default App;
