import React, { Fragment } from "react";
import QuestionItem from "./QuestionItem";
import { Container } from "reactstrap";
import { css } from "glamor";
import ScrollToBottom from "react-scroll-to-bottom";

const QuestionList = (props) => {
  const { room, questionList } = props;
  const ROOT_CSS = css({
    height: 460,
  });
  return (
    <Fragment>
      <div>
        <Container className="question-boxlist question-box pt-2 text-center">
          <p className="question-roomname text-break">ROOM : {room.roomName}</p>
          <div className="">
            {questionList.length >= 1 ? (
              <ScrollToBottom className={ROOT_CSS}>
                {Array.isArray(questionList)}

                {questionList.map((question) =>
                  question.questionStatus ? (
                    <QuestionItem
                      key={question._id}
                      question={question}
                      room={room}
                    />
                  ) : null
                )}
              </ScrollToBottom>
            ) : (
              <ScrollToBottom className={ROOT_CSS}>
                <p className="nulltext text-break">DON'T HAVE ANY QUESTION</p>
              </ScrollToBottom>
            )}
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default QuestionList;
