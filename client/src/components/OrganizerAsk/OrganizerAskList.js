import React,{useState}from "react";

import OrganizerAskItem from "./OrganizerAskItem";

const OrganizerAskList = ({ askList }) => {

  return (
    <div className="org-box">
      <div className="pt-4 px-3">
        <h4 className="org-h4"> Question</h4>
        <hr className="border border-secondary" />
      </div>
      {askList.length >= 1 ? (
        <div className="org-boxlist">
          {askList.map((ask) => (
            <OrganizerAskItem key={ask._id} ask={ask} />
          ))}
        </div>
      ) : (
        <div className="org-boxlist">
          <p className="nulltext text-break">DON'T HAVE ANY QUESTION</p>
        </div>
      )}
    </div>
  );
};

export default OrganizerAskList;
