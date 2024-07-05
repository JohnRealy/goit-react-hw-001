export default function Feedback({ feedback, totalFeedback }) {
  const percent = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <p>Good:{feedback.good}</p>
      <p>Neutral:{feedback.neutral}</p>
      <p>Bad:{feedback.bad}</p>
      <p>Total:{totalFeedback}</p>
      <p>Positive: {percent ? percent : 0}%</p>
    </div>
  );
}
