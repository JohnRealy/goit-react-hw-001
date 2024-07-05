import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import { useEffect, useState } from "react";

export default function App() {
  const initState = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    const isEmpty = data.good + data.neutral + data.bad;

    if (isEmpty > 0) {
      return data;
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  };

  const [feedback, setFeedback] = useState(initState);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (value) => {
    setFeedback({ ...feedback, [value]: feedback[value] + 1 });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {!totalFeedback ? (
        <p>No feedbacks yet</p>
      ) : (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      )}
    </>
  );
}
