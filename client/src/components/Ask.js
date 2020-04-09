import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addAsk } from "../actions/askActions";

const Ask = ({ addAsk }) => {
  const [text, setText] = useState("");
  const userId = "5e85403922192a21e87fbbaa";
  const roomId = "5e85457618a87c3a58dfffb8";
  return (
    <div>
      <div>
        <h3>Leave a Text</h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addAsk({ userId, roomId, text });
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Ask Question"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </form>

      <div>
        <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default connect(null, { addAsk })(Ask);
