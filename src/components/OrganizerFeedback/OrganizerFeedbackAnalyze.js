import React from "react";
import OrganizerFeedbackChart from "./OrganizerFeedbackChart";

const OrganizerFeedbackAnalyze = (props) => {
  const { feedbackList } = props;

  return (
    <div>
      <h2 className="org-h2 text-center"> Summary</h2>
      <OrganizerFeedbackChart feedbackList={feedbackList} />
    </div>
  );
};

export default OrganizerFeedbackAnalyze;
