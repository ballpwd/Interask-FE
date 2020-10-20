import React from "react";
import OrganizerPresentItem from "./OrganizerPresentItem";

const OrganizerPresentList = ({ askList }) => {
  return (
    <div className="pt-2 px-4">
      <h4 className="org-h3"> Question</h4>
      <hr />
      {askList.length >= 1 ? (
        <div>
          {Array.isArray(askList)}
          {askList.map((ask) => (
            <OrganizerPresentItem key={ask._id} ask={ask} />
          ))}
        </div>
      ) : (
        <div>
          <h2 className="org-h2 text-center">DON'T HAVE ANY QUESTION</h2>
        </div>
      )}
    </div>
  );
};

export default OrganizerPresentList;
