
import React from "react";

export default function QuizSubmit(props) {
    return (
        <>
            <div className="show_score">
                Your score is {props.score} out of {props.totalscore}
                <button className="try_again" onClick={props.tryagain}>Try Again</button>
            </div>
        </>
    );
}