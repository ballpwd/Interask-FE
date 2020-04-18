import React from "react";
import OrganizerPresentItem from "./OrganizerPresentItem";

const OrganizerPresentList = ({ askList }) => {
  return (
    <div>
      <h4 className="text-left font-weight-bold"> Question</h4>
      <hr />
      {Array.isArray(askList)}
      {askList.map((ask) => (
        <OrganizerPresentItem key={ask._id} ask={ask} />
      ))}
    </div>
  );
};

export default OrganizerPresentList;
