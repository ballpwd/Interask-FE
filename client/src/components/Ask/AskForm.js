import React,{useState} from  'react';
import { addAsk } from "../../actions/askActions";
import { connect } from "react-redux";

const AskForm = ({ room,addAsk }) => {
    const [text, setText] = useState("");
    const [anonymous, setAnonymous] = useState(false);
    const userId = '5e85403922192a21e87fbbaa' ;

    return(
        <div className = "text-center container">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const roomId = room._id ;
                    addAsk({ userId, roomId, text, anonymous });
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
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="anonymousSwitch" value={anonymous} onChange={()=>setAnonymous(!anonymous)} />
                        <label className="custom-control-label" htmlFor="anonymousSwitch">Send as Anonymous</label>
                    </div>
                </div>
        

                <input type="submit" value="Submit" className="btn btn-secondary float-right" />
            </form>
        </div>
    )

}

export default connect(null,{addAsk})(AskForm);