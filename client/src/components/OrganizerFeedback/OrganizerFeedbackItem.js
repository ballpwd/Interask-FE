import React from "react";

const OrganizerFeedbackItem = (props) => {
  const {
    feedback: { emoticon, text, date },
  } = props;
  const time = new Date(date);
  return (
    <div className="boxitem">
      <div className="org-p p-2 text-break">
        {emoticon}
        {text} <br />- at {time.toUTCString()}
      </div>
    </div>
  );
};

export default OrganizerFeedbackItem;
