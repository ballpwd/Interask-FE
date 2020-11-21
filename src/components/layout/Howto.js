import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

const HowTo = () => {
  return (
    <Fragment>
      <Container>
        <Row className="justify-content-center">
          <Col md="6" xs="12" className="text-center mt-2">
            <h5>USER</h5>
            <div className="text-left">
              <div className="org-p">
                1. ผู้ใช้เลือก<b> Sing in with Google</b> เพื่อเข้าสู่ระบบผ่าน
                Google Account{" "}
              </div>
              <div className="org-p">
                2. ผู้ใช้เลือก<b> Join room</b> เพื่อเข้าร่วมห้องผ่าน PIN หรือ
                QR Code{" "}
              </div>{" "}
              <div className="org-p">3. ผู้ใช้เลือกห้องที่ต้องการเข้า </div>{" "}
              <div className="org-p">
                4. ผู้ใช้สามารถเลือก<b> Leave room</b> เพื่ออกจากห้องได้{" "}
              </div>
              <div className="org-p">
                5. ผู้ใช้เลือกฟังก์ชันที่ต้องการใช้งาน{" "}
              </div>
              <div className="org-p px-3">
                <li>
                  {" "}
                  ผู้ใช้เลือก <b>ASK </b>
                  ผู้ใช้สามารถเข้าไปถามคำถามที่สงสัยได้ โดยสามารถเลือก Send as
                  Anonymus เพื่อส่งแบบไม่ระบุตัวตนได้
                </li>
              </div>
              <div className="org-p px-3">
                <li>
                  ผู้ใช้เลือก <b>FEEDBACK </b>
                  ผู้ใช้สามารถเข้าไปแสดงความคิดเห็นและประเมินการเรียนการสอน
                  ในวิชานั้น ๆ ได้
                </li>
              </div>
              <div className="org-p px-3">
                <li>
                  ผู้ใช้เลือก <b>Q&A </b>
                  ผู้ใช้สามารถเข้าไปตอบคำถาม ที่เจ้าของห้องสร้างไว้ได้
                  โดยหากตอบแล้วจะไม่สามารถแก้ไขคำตอบได้อีก
                </li>
              </div>
              <div className="org-p">
                6. ผู้ใช้เลือก<b> Log out </b>เพื่อออกจากระบบ{" "}
              </div>
            </div>
          </Col>
          <Col md="6" xs="12" className="text-center mt-2">
            <h5>ORGANIZER</h5>
            <div className="text-left">
              <div className="org-p">
                1. ผู้จัดการเลือก<b> Sing in with Google</b>{" "}
                เพื่อเข้าสู่ระบบผ่าน Google Account{" "}
              </div>
              <div className="org-p">
                2. ผู้จัดการสามารถ<b> Create room</b> โดยกรอกชื่อห้อง ระบบจะ
                generate PIN และ QR Code{" "}
              </div>{" "}
              <div className="org-p">3. ผู้จัดการเลือกห้องที่ต้องการเข้า </div>{" "}
              <div className="org-p">
                4. ผู้จัดการสามารถเลือก <b>Manage room</b> เพื่อแก้ไขชื่อห้อง
                หรือ ลบห้องได้{" "}
              </div>{" "}
              <div className="org-p">
                5. ผู้จัดการเลือกฟังก์ชันที่ต้องการใช้งาน{" "}
              </div>
              <div className="org-p px-3">
                <li>
                  {" "}
                  ผู้จัดการเลือก <b>ASK </b>
                  สามารถดูคำถามที่ผู้ใช้ส่งมาได้
                  และสามารถเลือกคำถามที่จะแสดงในหน้า Presentation ได้ สามารถ
                  filter data by date ได้ และฝั่งขวาจะมีข้อมูล Summary
                  ระบุจำนวนคำถามทั้งหมด และจำนวนผู้ที่เข้ามาถามคำถาม
                </li>
              </div>
              <div className="org-p px-3">
                <li>
                  ผู้จัดการเลือก <b>FEEDBACK </b>
                  สามารถดูความคิดเห็นของผู้ใช้ที่มีต่อการเรียน ซึ่งสามารถ filter
                  data by date เลือกวันที่สอน หรือดูทั้งหมดได้
                  โดยจะมีกราฟสถิติความพึงพอใจเพื่อให้ดูง่ายขึ้น{" "}
                </li>
              </div>
              <div className="org-p px-3">
                <li>
                  ผู้จัดการเลือก <b>Q&A </b>
                  สามารถสร้างคำถาม เพื่อให้ผู้ใช้งานตอบ และสามารถแก้ไขคำถาม
                  หรือลบคำถามได้ โดยคำถามไหนที่มีคนตอบแล้วจะไม่สามารถแก้ไขได้
                  นอกจากนี้ผู้จัดการสามารถเลือกปิดการรับคำตอบได้
                  และเมื่อกดเข้าไปในคำถามจะแสดงผลคำตอบทั้งหมดที่ผู้ใช้ได้ตอบมา
                </li>
              </div>
              <div className="org-p">
                6. ผู้จัดการสามารถเลือกปิดการใช้งานแต่ละฟังก์ชันได้{" "}
              </div>
              <div className="org-p">
                7. ผู้จัดการเลือก<b> Presentation </b> ซึ่งเป็นฟังก์ชันย่อยของ
                ASK เพื่อแสดงคำถามที่มีผู้ใช้ถามเข้ามาเปิดโชว์บนจอแสดงผล
                ซึ่งถ้าคำถามนั้นมีการกดตอบแล้วจะเปลี่ยนเป็นสีแดง{" "}
              </div>
              <div className="org-p">
                8. ผู้จัดการเลือก<b> Export </b>{" "}
                ซึ่งเป็นฟังก์ชันย่อยของทุกฟังก์ชัน
                เพื่อนำข้อมูลที่ได้จากแต่ละฟังก์ชัน Export ออกมาเป็นไฟล์ Excel{" "}
              </div>
              <div className="org-p">
                9. ผู้จัดการเลือก<b> Log out </b>เพื่อออกจากระบบ{" "}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HowTo;
