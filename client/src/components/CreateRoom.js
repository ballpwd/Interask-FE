import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createRoom } from "../actions/orgRoomActions";

const CreateRoom = ({ createRoom }) => {
  const [roomName, setRoomName] = useState("");
  const userId = "5e85403922192a21e87fbbaa";

  return (
    <div>
      <div>
        <h3>Create Room</h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createRoom({ userId, roomName });
          setRoomName("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Insert Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
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

export default connect(null, { createRoom })(CreateRoom);
