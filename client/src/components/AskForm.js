import React,{useState} from  'react';
import { addAsk } from "../actions/askActions";
import { connect } from "react-redux";

const AskForm = ({ room,addAsk }) => {
    const [text, setText] = useState("");
    const userId = '5e85403922192a21e87fbbaa' ;
    const roomId = '5e8546ad7db02d2b70f38d78' ;

    return(
        <div className = "text-center container">
        <form
            onSubmit={(e) => {
                e.preventDefault();
                addAsk({ userId, roomId, text });
                setText("");
            }}
        >
            <div className="form-group">
            <textarea className="form-control"
                name="text"
                placeholder="Write the question"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            </div>

            <input type="submit" value="Submit" className="btn btn-secondary float-right" />
        </form>
        </div>
    )

}

export default connect(null,{addAsk})(AskForm);