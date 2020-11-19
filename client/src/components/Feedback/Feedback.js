import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getRoomById, roomUnload } from "../../actions/roomActions";
import { Container} from "reactstrap";
import Loading from '../Loading/Loading';
import FeedbackForm from "../Feedback/FeedbackForm";
import NotFound from "../layout/NotFound";

const Feedback = (props) => {

  const {
    roomUnload,
    getRoomById,
    room : {room,roomLoading},
    match
  } = props;
  
  useEffect(() => {
    getRoomById(match.params.id);
    return () => {
      roomUnload();
    };
  }, [getRoomById, match.params.id, roomUnload]);

  return (room == null|| roomLoading) ? (
    <Fragment>
      {(!roomLoading) && (room == null)? (<NotFound></NotFound>):(<Loading></Loading>) }
    </Fragment>
  ) : (
    <Fragment>
      <div className="fullscreen bg fullscreen">
      <Container fluid className='topic'>
            <h1>FEEDBACK</h1>
          </Container>
        <Container>
            <FeedbackForm room={room}/>
        </Container>
     </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  room: state.room
});

export default connect(mapStateToProps, { getRoomById, roomUnload })(
  Feedback
);
