import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./components/SignUp";
import ThankYou from "./components/Thankyou";


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages/>}/>
          <Route exact path="/thankyou" element={<ThankYou/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;




