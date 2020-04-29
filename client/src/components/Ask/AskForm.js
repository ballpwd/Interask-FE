import React, { useState } from 'react';
import { addAsk } from "../../actions/askActions";
import { connect } from "react-redux";
import { Container, Row, Col, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';



const AskForm = ({ room, addAsk }) => {
    const [text, setText] = useState("");
    const [anonymous, setAnonymous] = useState(false);
    const userId = '5e85403922192a21e87fbbaa';

    return (
        <Container fluid>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const roomId = room._id;
                    addAsk({ userId, roomId, text, anonymous });
                    setText("");
                }}
            >
                <div className="box">
                    <Row>
                        <Col xs="6" className ="textarea" >
                            <input type="text"
                                name="text"
                                placeholder="Write the question"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                required
                            />
                        </Col>
                        <Col xs="6"> <input type="submit" value="Submit" className="button" /></Col>
                    </Row>
                </div>


                <div className="custom-control custom-switch text-center">
                    <input type="checkbox" className="custom-control-input" id="anonymousSwitch" value={anonymous} onChange={() => setAnonymous(!anonymous)} />
                    <label className="custom-control-label" htmlFor="anonymousSwitch">Send as Anonymous</label>
                </div>
            </form>
        </Container>
    )

}

export default connect(null, { addAsk })(AskForm);