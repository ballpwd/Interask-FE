import React from "react";
import OrganizerFeedbackItem from "./OrganizerFeedbackItem";

const OrganizerFeedbackList = ({ feedbackList }) => {
  return (
    <div className="org-box">
      <div className="pt-4 px-3">
        <h4 className="org-h4"> Feedback</h4>
        <hr className="border border-secondary" />
      </div>
      {feedbackList.length >= 1 ? (
        <div className="org-boxlist">
          {feedbackList.map((feedback) => (
            <OrganizerFeedbackItem key={feedback._id} feedback={feedback} />
          ))}
        </div>
      ) : (
        <div className="org-boxlist">
          <p className="nulltext text-break">DON'T HAVE ANY FEEDBACK</p>
        </div>
      )}
    </div>
  );
};

export default OrganizerFeedbackList;
