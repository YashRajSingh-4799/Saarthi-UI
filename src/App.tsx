import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Intro1 from "./components/intro1/intro1";
import Intro2 from "./components/intro2/intro2";
import Intro3 from "./components/intro3/intro3";
import SignUp from "./components/signUp/OTPSignup";
import OTPLogin from "./components/loginScreen/OTPLogin";
import Welcome from "./components/welcome/welcome";
import Ques from "./components/quesScreen/QuesScreen";
import Questionnaire from "./components/questionnaire/Questionnaire";
import AskQues from "./components/askQues/askQues";
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
          <Route path="/quesScreen" element={<Ques />} />
          <Route path="/askQues" element={<AskQues />} />
      </Routes>
    </>
        );
};

export default App;
