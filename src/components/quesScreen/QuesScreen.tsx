import React, {useState} from "react";
import sarthilogo from "../../assets/sarthi_logo.svg";
import gradient from "../../assets/gradient.svg";
import "./style.quesScreen.scss";

const questions = [
  {
    id: 1,
    question:
      "Do you generally find yourself to be angry, irritated with situations, disappointed with outcomes, when things don't go your way…?",
  },
  { id: 2, question: "Question 2?" },
  { id: 3, question: "Question 3?" },
  { id: 4, question: "Question 4?" },
  { id: 5, question: "Question 5?" },
];


const QuesScreen: React.FC = () =>  {

    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [answers, setAnswers] = useState<boolean[]>(
      Array(questions.length).fill(false)
    );

    const handleAnswer = (value: boolean) => {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = value;
      setAnswers(newAnswers);
      setCurrentQuestion((prevIndex) => prevIndex + 1);
    };

  return (
    <div className="custom-container">
      <div className="custom-layout">
        <img className="custom-gradient" src={gradient} alt="" />

        <div className="custom-title">Sarathi Asks</div>

        <div className="custom-logo">
          <img src={sarthilogo} alt="" />
        </div>

        {currentQuestion < questions.length && (
          <div key={questions[currentQuestion].id} className="custom-question">
            {questions[currentQuestion].question}
            <div className="custom-button-ques">
              <button onClick={() => handleAnswer(true)}>YES</button>
              <button onClick={() => handleAnswer(false)}>NO</button>
            </div>
          </div>
        )}
        {currentQuestion >= questions.length && (
          <div className="custom-info">
            Thank you for answering all questions!
          </div>
        )}

        

        <div className="custom-info">
          These questions are important for Sarathi to get to know you
          personally. Please answer them as truthfully as you can to ride the
          journey of your life!
        </div>
      </div>
    </div>
  );
}

export default QuesScreen;
