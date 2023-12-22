import { Route, Routes } from "react-router-dom";
import "./App.css";
import Intro1 from "./components/intro1";
import Intro2 from "./components/intro2";
import Intro3 from "./components/intro3";
import SignUp from "./components/OTPSignup";
import OTPLogin from "./components/OTPLogin";
import Welcome from "./components/welcome";
import Questionnaire from "./components/Questionnaire";
const App = () => {
  return (
    <>
      <Routes>
          <Route path="/intro1" element={<Intro1 />} />
          <Route path="/intro2" element={<Intro2 />} />
          <Route path="/intro3" element={<Intro3 />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<OTPLogin />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>
    </>
        );
};

export default App;
