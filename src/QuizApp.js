
import React, { useState } from "react";
import "./QuizApp.css";
import QuizSubmit from "./component/QuizSubmit";

export default function QuizApp() {
    const question = [
        {
            questionNum: "1",
            questionText: "Which among the following planets has rings?",
            option: ["Saturn", "Venus", "Jupiter", "Earth"],
            answer: 1
        },
        {
            questionNum: "2",
            questionText: "The Indian Institute of Science is located at",
            option: ["Kerala", "Madras", "Bangalore", "New Delhi"],
            answer: 3
        },
        {
            questionNum: "3",
            questionText: "The Yarlung Zangbo river, in India is known as",
            option: ["Ganga", "Brahmaputra", "Indus", "Mahanadi"],
            answer: 2
        },
        {
            questionNum: "4",
            questionText: "The ozone layer restricts",
            option: ["Visible light", "Infrared rediation", "X-rays and gamma rays", "Ultraviolet radiation"],
            answer: 4
        },
        {
            questionNum: "5",
            questionText: "Logarithm tables were invented by",
            option: ["John Napier", "John Doe", "John Harrison", "John Douglas"],
            answer: 1
        },
        {
            questionNum: "6",
            questionText: "Thomas cup is associated with",
            option: ["table tennis", "billiards", "badminton", "basketball"],
            answer: 3
        },
        {
            questionNum: "7",
            questionText: "Which is the smallest country in the world?",
            option: ["Nepal", "Bhutan", "Sri Lanka", "Vatican city"],
            answer: 4
        },
        {
            questionNum: "8",
            questionText: "Which country won the FIFA World Cup in 2018?",
            option: ["Brazil", "Germany", "France", "Spain"],
            answer: 3
        },
        {
            questionNum: "9",
            questionText: "Who invented the steam engine?",
            option: ["James Watt", "Isaac Newton", "Albert Einstein", "Galileo Galilei"],
            answer: 1
        },
        {
            questionNum: "10",
            questionText: "Who as the first indian to win a Nobel Prize?",
            option: ["C.V. Raman", "Rabindranath Tagore", "Mother Teresa", "Amartya Sen"],
            answer: 2
        }
    ]

    const [currentQue, setCurrentQue] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState("");
    const [result, setResult] = useState(false);
    const [nextHide, setNextHide] = useState("nextshow");

    const previousQue = () => {
        if (currentQue > 0) {
            setCurrentQue(currentQue - 1);
            console.log(currentQue)
            if (currentQue === question.length - 1) {
                setNextHide("nextshow");
            }
        }
        else if (currentQue <= 0) {
            setCurrentQue(0);
        }
    }
    const nextQue = () => {
        CorrectAns();
        if (currentQue < question.length - 1) {
            setCurrentQue(currentQue + 1);
            setClickedOption("");
            if (currentQue === question.length - 2) {
                setNextHide("nexthide");
            }
        }
        else {
            setResult(true);
        }
    }
    const CorrectAns = () => {
        if (clickedOption === question[currentQue].answer) {
            setScore(score + 1);
        }
    }
    const resetTest = () => {
        setResult(false);
        setCurrentQue(0);
        setClickedOption(0);
        setScore(0);
        setNextHide("nextshow");
    }

    return (
        <>
            <div className="container">
                <div className="test_box">
                    <h1 className="heading">Quiz App</h1>
                    {result ? (
                        <QuizSubmit score={score} totalscore={question.length} tryagain={resetTest} />
                    ) : (
                        <>
                            <div className="que_number">Question <span className="current_que">{question[currentQue].questionNum}</span>/<span className="total_que">{question.length}</span></div>
                            <div className="ques_text">{question[currentQue].questionText}</div>
                            <div className="ans_options">
                                {question[currentQue].option.map((option, i) => {
                                    return (
                                        <button className={`option_btn ${clickedOption === i + 1 ? "checked" : null}`} key={i} onClick={() => setClickedOption(i + 1)}>{option}</button>
                                    );
                                })}
                            </div>
                            <div className="prev_next">
                                <button className="prev_btn" onClick={() => previousQue()}>Previous</button>
                                <button className={`next_btn ${nextHide}`} onClick={() => nextQue()}></button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}